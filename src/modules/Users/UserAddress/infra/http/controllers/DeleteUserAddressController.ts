import { container } from 'tsyringe';
import { DeleteUserAddressUseCase } from '../../useCases/DeleteUserAddressUseCase';
import { Request, Response } from 'express';

export class DeleteUserAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const deleteUserAddressUseCase = container.resolve(
        DeleteUserAddressUseCase,
      );
      await deleteUserAddressUseCase.execute(id);

      return response
        .status(200)
        .json({ message: 'Endereço do usuário deletado com sucesso' });
    } catch (error) {
      return response.status(500).json({
        message:
          'Erro ao deletar endereço do usuário (DeleteUserAddressController)',
        error: error.message,
      });
    }
  }
}
