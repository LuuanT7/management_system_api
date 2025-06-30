import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserAddressUseCase } from '../../useCases/CreateUserAddressUseCase';
import { FindAllUserUseCase } from '@modules/Users/UseCases/FindAllUserUseCase';

export class CreateUserAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      userId,
      address,
      number,
      complement,
      neighborhood,
      city,
      state,
      zipCode,
    } = request.body;

    try {
      const createUserAddressUseCase = container.resolve(
        CreateUserAddressUseCase,
      );

      const findUser = container.resolve(FindAllUserUseCase);

      const existingUser = await findUser.execute(userId);

      if (!existingUser) {
        return response.status(404).json({
          message: 'Usuário não encontrado',
        });
      }

      const userAddress = await createUserAddressUseCase.execute({
        userId,
        address,
        number,
        complement,
        neighborhood,
        city,
        state,
        zipCode,
      });
      return response.status(201).json(userAddress);
    } catch (error) {
      return response.status(500).json({
        message:
          'Erro ao criar endereço do usuário (CreateUserAddressController)',
        error: error.message,
      });
    }
  }
}
