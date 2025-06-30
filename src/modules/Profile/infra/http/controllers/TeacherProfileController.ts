import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { TeacherProfileUseCase } from '@modules/Profile/useCases/TeacherProfileUseCase';
import { FindByIdUserUseCase } from '@modules/Users/UseCases/FindByIdUserUseCase';

export class TeacherProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const teacherProfileUseCase = container.resolve(TeacherProfileUseCase);
      const userUseCase = container.resolve(FindByIdUserUseCase);
      const existsUser = await userUseCase.execute(id);

      if (!existsUser) {
        return response.status(404).json({
          message: 'User not found',
        });
      }
      const profile = await teacherProfileUseCase.execute(id);
      return response.status(200).json(profile);
    } catch (error) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
}
