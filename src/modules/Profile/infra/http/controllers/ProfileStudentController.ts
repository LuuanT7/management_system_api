import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ProfileStudentUseCase } from '@modules/Profile/useCases/ProfileStudentUseCase';
import { FindByIdUserUseCase } from '@modules/Users/UseCases/FindByIdUserUseCase';

export class ProfileStudentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const profileStudentUseCase = container.resolve(ProfileStudentUseCase);
      const userUseCase = container.resolve(FindByIdUserUseCase);
      const existsUser = await userUseCase.execute(id);

      if (!existsUser) {
        return response.status(404).json({
          message: 'User not found',
        });
      }
      const profile = await profileStudentUseCase.execute(id);
      return response.status(200).json(profile);
    } catch (error) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
}
