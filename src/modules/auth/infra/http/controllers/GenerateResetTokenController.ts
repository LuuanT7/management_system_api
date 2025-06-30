import { Request, Response } from "express";
import { container } from "tsyringe";
import { prisma } from "@shared/infra/database/prisma";
import { GenerateResetTokenUseCase } from "@modules/auth/useCases/GenerateResetTokenUseCase";
import { SendTokenEmailUseCase } from "@modules/Mail/UseCases/SendTokenEmailUseCase";

export class GenerateResetTokenController {
    async handle(request: Request, response: Response) {
        try {
            const generateToken = container.resolve(GenerateResetTokenUseCase);
            const { email } = request.body;

            const user = await prisma.user.findUnique({ where: { email } })

            if (!user) {
                return response.status(500).json({ message: "Nenhum usuário com este e-mail encontrado!" });

            }
            const userId = user.id
            const token = await generateToken.execute(userId)

            if (token) {
                const sendMail = container.resolve(SendTokenEmailUseCase);
                await sendMail.execute({
                    email,
                    name: user.name,
                    token: token.resetToken
                })

            }

            return response.status(200).json(token);

        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao buscar todos os usuários" });
        }
    }
} 