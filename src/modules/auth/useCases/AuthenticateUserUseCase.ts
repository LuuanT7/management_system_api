import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { prisma } from '@shared/infra/database/prisma';
import { AppError } from '@shared/errors/AppError';
import { IAuthenticateUserDTO } from '../dtos/IAuthenticateUserDTO';

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  token: string;
  refreshToken: string;
}

export class AuthenticateUserUseCase {
  public async execute({ email, password }: IAuthenticateUserDTO): Promise<IResponse> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError('Email ou senha incorretos', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Email ou senha incorretos', 401);
    }

    // Payload do token com informações do usuário
    const tokenPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const token = sign(tokenPayload, process.env.JWT_SECRET as string, {
      subject: user.id,
      expiresIn: '15m',
    });

    // Payload do refresh token (pode ser mais simples)
    const refreshTokenPayload = {
      id: user.id,
    };

    const refreshToken = sign(refreshTokenPayload, process.env.JWT_REFRESH_SECRET as string, {
      subject: user.id,
      expiresIn: '7d',
    });

    // Salvar o refresh token no banco
    await prisma.token.create({
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