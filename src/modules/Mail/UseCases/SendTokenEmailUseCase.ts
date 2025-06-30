import { inject, injectable } from "tsyringe";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";
import { resolve } from "path";
import { AppError } from "@shared/errors/AppError";
import { ITokenRequest } from "../DTOS/IWelcomeRequest";



@injectable()
export class SendTokenEmailUseCase {
    constructor(
        @inject("MailProvider")
        private mailProvider: IMailProvider
    ) { }

    async execute({ name, token, email }: ITokenRequest): Promise<void> {
        try {
            const templatePath = resolve(__dirname, "..", "views", "emails", "token.hbs");

            await this.mailProvider.sendMail({
                to: {
                    name,
                    email
                },
                subject: "Alteração de senha!",
                templateData: {
                    template: templatePath,
                    variables: {
                        name,
                        token,
                        link: process.env.APP_WEB_URL || "http://localhost:8080/v1"
                    }
                }
            });
        } catch (error) {
            throw new AppError("Erro ao enviar e-mail de alteração de senha.", 500);
        }
    }
} 