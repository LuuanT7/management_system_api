import { AppError } from '@shared/errors/AppError';
import { prisma } from '@shared/infra/database/prisma';
import { injectable } from 'tsyringe';

@injectable()
class LogoutUserUseCase {
    async execute(userId: string): Promise<void> {
        if (!userId) {
            throw new AppError("UserId is required! (LogoutUserUseCase)")
        }

        await prisma.token.delete({
            where: { userId }
        })

        return console.log("Logout has been succefully!")
    }
}

export { LogoutUserUseCase }; 