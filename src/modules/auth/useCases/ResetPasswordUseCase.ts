import { inject, injectable } from 'tsyringe';
import { IResetPassword } from '@modules/Users/DTOS/IUserDTO';
import { z } from 'zod';
import { IUserRepository } from '@modules/Users/Repositories/IUserRepository';
import { } from "uuid"
import { AppError } from '@shared/errors/AppError';
import { prisma } from '@shared/infra/database/prisma';
import { hash } from 'crypto';


@injectable()
export class ResetPasswordUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async execute({ againNewPassword, newPassword, resetToken }: IResetPassword): Promise<IResetPassword> {
        try {

            if (!resetToken) {
                throw new AppError('Token is required! (ResetPasswordUseCase)')
            }

            const verifyToken = await prisma.resetUserPassword.findUnique({ where: { resetToken } })

            if (!verifyToken) {
                throw new AppError('Incorrect token (ResetPasswordUseCase)')
            }

            if (againNewPassword === newPassword) {
                throw new AppError('Passwords are not compatible! (ResetPasswordUseCase)')
            }
            const resetPass = await this.userRepository.update({
                id: verifyToken.userId, password: newPassword
            })

            await prisma.resetUserPassword.delete({
                where: {
                    resetToken
                }
            })

            return resetPass;
        } catch (error) {
            console.error(error);
            throw new AppError('Error resetting password (ResetPasswordUseCase)');
        }
    }
}
