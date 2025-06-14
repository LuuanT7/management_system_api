import { inject, injectable } from 'tsyringe';
import { IUserAddressRepository } from '../repositories/IUserAddressRepository';
import { AppError } from '@shared/errors/AppError';
import z from 'zod';

const deleteUserAddressSchema = z.object({
  id: z.string({ required_error: 'ID do endereço é obrigatório' }),
});

@injectable()
export class DeleteUserAddressUseCase {
  constructor(
    @inject('UserAddressRepository')
    private userAddressRepository: IUserAddressRepository,
  ) {}

  async execute(id: string): Promise<void> {
    try {
      await this.userAddressRepository.delete(id);
    } catch (error) {
      throw new AppError(
        'Erro ao deletar endereço do usuário (DeleteUserAddressUseCase)',
        500,
      );
    }
  }
}
