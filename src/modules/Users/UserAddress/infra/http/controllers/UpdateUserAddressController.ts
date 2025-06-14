import { container } from 'tsyringe';
import { UpdateUserAddressUseCase } from '../../useCases/UpdateUserAddressUseCase';
import { Request, Response } from 'express';

export class UpdateUserAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      address,
      number,
      complement,
      neighborhood,
      city,
      state,
      zipCode,
    } = request.body;

    try {
      const updateUserAddressUseCase = container.resolve(
        UpdateUserAddressUseCase,
      );

      const userAddress = await updateUserAddressUseCase.execute({
        id,
        address,
        number,
        complement,
        neighborhood,
        city,
        state,
        zipCode,
      });

      return response.status(200).json(userAddress);
    } catch (error) {
      return response.status(500).json({
        message:
          'Erro ao atualizar endereço do usuário (UpdateUserAddressController)',
        error: error.message,
      });
    }
  }
}
