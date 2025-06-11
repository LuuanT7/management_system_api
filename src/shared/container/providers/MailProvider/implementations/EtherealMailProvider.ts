import { IMailProvider } from "../IMailProvider";
import nodemailer, { Transporter } from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import { injectable } from "tsyringe";

@injectable()
export class EtherealMailProvider implements IMailProvider {
    private client: Transporter;

    constructor() {
        nodemailer.createTestAccount().then(account => {
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass,
                },
            });

            this.client = transporter;
        }).catch(err => console.error("Failed to create test email account:", err));
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