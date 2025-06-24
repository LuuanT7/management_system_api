import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { TeacherProfileUseCase } from '@modules/Profile/useCases/TeacherProfileUseCase';
import { FindByIdUserUseCase } from '@modules/Users/UseCases/FindByIdUserUseCase';
import { GuardianProfileUseCase } from '@modules/Profile/useCases/GuardianProfileUseCase';

export class GuardianProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userid } = request.params;

    try {
      const guardianProfileUseCase = container.resolve(GuardianProfileUseCase);
      const userUseCase = container.resolve(FindByIdUserUseCase);
      const existsUser = await userUseCase.execute(userid);

      if (!existsUser) {
        return response.status(404).json({
          message: 'User not found',
        });
      }
      const profile = await guardianProfileUseCase.execute(userid);
      return response.status(200).json(profile);
    } catch (error) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
}
