import { LogoutUserUseCase } from '@modules/auth/useCases/LogoutUserUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class LogoutController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const logoutUserUseCase = container.resolve(LogoutUserUseCase);

        await logoutUserUseCase.execute(id);

        return response.status(204).send();
    }
}

export { LogoutController }; 