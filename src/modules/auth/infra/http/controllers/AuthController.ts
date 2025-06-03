import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from '../../../useCases/AuthenticateUserUseCase';

export class AuthController {
  public async authenticate(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserUseCase);

    const { user, token, refreshToken } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user, token, refreshToken });
  }
} 