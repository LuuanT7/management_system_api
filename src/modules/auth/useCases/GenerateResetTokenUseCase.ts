import { inject, injectable } from 'tsyringe';
import { IResetPassword } from '@modules/Users/DTOS/IUserDTO';
import { IUserRepository } from '@modules/Users/Repositories/IUserRepository';
import { } from "uuid"
import { AppError } from '@shared/errors/AppError';


//classe construtura, estudar classe contrutoria e injeção de dependencia
// estudar classe e arquitetura solids
@injectable()
export class GenerateResetTokenUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async execute(userId: string): Promise<IResetPassword> {
        try {
            if (!userId) {
                throw new AppError('User ID is required! (GenerateResetTokenUseCase)')
            }
            const generateShortToken = (length = 6) => {
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let token = '';
                for (let i = 0; i < length; i++) {
                    token += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return token;
            }

            const token = await this.userRepository.generateResetToken({
                expiresIn: new Date(Date.now() + 1000 * 60 * 15),
                resetToken: generateShortToken(),
                userId,

            });

            return token;
        } catch (error) {
            console.error(error);
            throw new AppError('Erro ao gerar Token (GenerateResetTokenUseCase)');
        }
    }
}
