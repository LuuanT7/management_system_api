import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ProfileStudentUseCase } from '@modules/Profile/useCases/StudentProfileUseCase';
import { FindByIdUserUseCase } from '@modules/Users/UseCases/FindByIdUserUseCase';

export class StudentProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    try {
      const profileStudentUseCase = container.resolve(ProfileStudentUseCase);
      const userUseCase = container.resolve(FindByIdUserUseCase);
      const existsUser = await userUseCase.execute(userId);

      if (!existsUser) {
        return response.status(404).json({
          message: 'User not found',
        });
      }
      const profile = await profileStudentUseCase.execute(userId);
      return response.status(200).json(profile);
    } catch (error) {
      console.error('ERROR', error);
      return response.status(error.statusCode).send(error);
    }
  }
}
