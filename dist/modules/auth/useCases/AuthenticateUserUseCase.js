"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = require("@shared/infra/database/prisma");
const AppError_1 = require("@shared/errors/AppError");
class AuthenticateUserUseCase {
    async execute({ email, password }) {
        const user = await prisma_1.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new AppError_1.AppError('Email ou senha incorretos', 401);
        }
        const passwordMatched = await (0, bcryptjs_1.compare)(password, user.password);
        if (!passwordMatched) {
            throw new AppError_1.AppError('Email ou senha incorretos', 401);
        }
        // Payload do token com informações do usuário
        const tokenPayload = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        };
        const token = (0, jsonwebtoken_1.sign)(tokenPayload, process.env.JWT_SECRET, {
            subject: user.id,
            expiresIn: '15m',
        });
        // Payload do refresh token (pode ser mais simples)
        const refreshTokenPayload = {
            id: user.id,
        };
        const refreshToken = (0, jsonwebtoken_1.sign)(refreshTokenPayload, process.env.JWT_REFRESH_SECRET, {
            subject: user.id,
            expiresIn: '7d',
        });
        // Salvar o refresh token no banco
        await prisma_1.prisma.token.create({
            data: {
                token: refreshToken,
                type: 'refresh_token',
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 dias
                userId: user.id,
            },
        });
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
            refreshToken,
        };
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
