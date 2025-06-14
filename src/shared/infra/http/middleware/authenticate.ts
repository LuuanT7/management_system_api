import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../../shared/errors/AppError';
import chalk from 'chalk';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
  id: string;
  name?: string;
  role?: string;
}


export function authenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token JWT não fornecido', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, process.env.JWT_SECRET as string);
    const { sub, id, name, role } = decoded as ITokenPayload;

    request.user = {
      id: id || sub, // Mantém compatibilidade com tokens antigos
      name,
      role,
    };
    console.log("USER AUTHENTICATED", chalk.green(JSON.stringify(request.user)))

    return next();
  } catch (err) {
    console.log("ERROR", chalk.red(err))
    throw new AppError('Token JWT inválido', 401);
  }
}