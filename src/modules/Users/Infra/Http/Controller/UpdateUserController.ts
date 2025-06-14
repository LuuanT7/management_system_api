import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserUseCase } from '@modules/Users/UseCases/UpdateUserUseCase';

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, password, role, cpf, rg, gender, phone, birthDate } =
      request.body;

    try {
      const updateUserUseCase = container.resolve(UpdateUserUseCase);

      const user = await updateUserUseCase.execute({
        id,
        name,
        email,
        password,
        role,
        cpf,
        rg,
        gender,
        phone,
        birthDate,
      });

      return response.status(200).send(user);
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .send({ message: 'Erro ao atualizar usuário' });
    }
  }
}
