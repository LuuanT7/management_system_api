import { IUpdateUserAddressDTO } from '../DTOS/IUserAddressDTO';
import { inject, injectable } from 'tsyringe';
import { IUserAddressRepository } from '../repositories/IUserAddressRepository';
import { AppError } from '@shared/errors/AppError';
import z from 'zod';

const updateUserAddressSchema = z.object({
  id: z.string({ required_error: 'ID do endereço é obrigatório' }),
  address: z.string().optional(),
  number: z.string().optional(),
  complement: z.string().optional(),
  neighborhood: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
});

@injectable()
export class UpdateUserAddressUseCase {
  constructor(
    @inject('UserAddressRepository')
    private userAddressRepository: IUserAddressRepository,
  ) {}

  async execute(data: IUpdateUserAddressDTO): Promise<IUpdateUserAddressDTO> {
    try {
      const {
        id,
        address,
        number,
        complement,
        neighborhood,
        city,
        state,
        zipCode,
      } = updateUserAddressSchema.parse(data);
      const userAddress = await this.userAddressRepository.update({
        id,
        address,
        number,
        complement,
        neighborhood,
        city,
        state,
        zipCode,
      });
      return userAddress;
    } catch (error) {
      throw new AppError(
        'Erro ao atualizar endereço do usuário (UpdateUserAddressUseCase)',
        500,
      );
    }
  }
}
