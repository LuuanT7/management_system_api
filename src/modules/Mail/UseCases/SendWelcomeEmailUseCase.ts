import { inject, injectable } from "tsyringe";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";
import { resolve } from "path";
import { AppError } from "@shared/errors/AppError";
import { IWelcomeRequest } from "../DTOS/IWelcomeRequest";



@injectable()
export class SendWelcomeEmailUseCase {
    constructor(
        @inject("MailProvider")
        private mailProvider: IMailProvider
    ) { }

    async execute({ name, email, password }: IWelcomeRequest): Promise<void> {
        try {
            const templatePath = resolve(__dirname, "..", "views", "emails", "welcome.hbs");

            await this.mailProvider.sendMail({
                to: {
                    name,
                    email
                },
                subject: "Bem-vindo ao Sistema de Gestão!",
                templateData: {
                    template: templatePath,
                    variables: {
                        name,
                        password,
                        link: process.env.APP_WEB_URL || "http://localhost:8080/v1"
                    }
                }
            });
        } catch (error) {
            throw new AppError("Erro ao enviar e-mail de boas-vindas.", 500);
        }
    }
} 