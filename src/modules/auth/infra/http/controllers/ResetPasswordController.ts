import { Request, Response } from "express";
import { container } from "tsyringe";
import { ResetPasswordUseCase } from "@modules/auth/useCases/ResetPasswordUseCase";
import { hash } from "bcryptjs";

export class ResetPasswordController {
    async handle(request: Request, response: Response) {
        const { againNewPassword, newPassword, resetToken } = request.body;
        try {
            const resetPass = container.resolve(ResetPasswordUseCase);
            const hashNewPassword = await hash(newPassword, 8)
            const hashAgainNewPassword = await hash(againNewPassword, 8)



            const reset = await resetPass.execute({
                againNewPassword: hashAgainNewPassword, newPassword: hashNewPassword, resetToken
            })

            return response.status(200).json(reset);

        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao buscar todos os usuários" });
        }
    }
} 