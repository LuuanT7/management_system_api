import { IMailProvider } from "../IMailProvider";
import nodemailer, { Transporter } from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import { injectable } from "tsyringe";

@injectable()
export class EtherealMailProvider implements IMailProvider {
    private client: Transporter;

    constructor() {
        this.client = nodemailer.createTransport({
            host: process.env.ETHEREAL_HOST,
            port: Number(process.env.ETHEREAL_PORT),
            secure: false,
            auth: {
                user: process.env.ETHEREAL_USER,
                pass: process.env.ETHEREAL_PASS,
            },
        });
    }

    async sendMail({ to, from, subject, templateData }: any): Promise<void> {
        try {
            const { template, variables } = templateData;

            const templateFileContent = fs.readFileSync(template, "utf-8");
            const templateParse = handlebars.compile(templateFileContent);
            const templateHTML = templateParse(variables);

            const message = await this.client.sendMail({
                to: `${to.name} <${to.email}>`,
                from: from ? `${from.name} <${from.email}>` : "Management System <noreply@managementsystem.com>",
                subject,
                html: templateHTML,
            });

            console.log("Message sent: %s", message.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
        } catch (error) {
            console.error("Error sending email:", error);
            throw new Error("Failed to send email");
        }
    }
} 