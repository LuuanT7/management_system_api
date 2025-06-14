import { IUserAddressRepository } from '../repositories/IUserAddressRepository';
import { ICreateUserAddressDTO } from '../DTOS/IUserAddressDTO';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { z } from 'zod';

const createUserAddressSchema = z.object({
  userId: z.string({ required_error: 'ID do usuário é obrigatório' }),
  address: z.string({ required_error: 'Endereço é obrigatório' }),
  number: z.string({ required_error: 'Número é obrigatório' }),
  complement: z.string().optional(),
  neighborhood: z.string().optional(),
  city: z.string({ required_error: 'Cidade é obrigatório' }),
  state: z.string({ required_error: 'Estado é obrigatório' }),
  zipCode: z.string({ required_error: 'CEP é obrigatório' }),
});

@injectable()
export class CreateUserAddressUseCase {
  constructor(
    @inject('UserAddressRepository')
    private userAddressRepository: IUserAddressRepository,
  ) {}

  async execute(data: ICreateUserAddressDTO): Promise<ICreateUserAddressDTO> {
    try {
      const {
        userId,
        address,
        number,
        complement,
        neighborhood,
        city,
        state,
        zipCode,
      } = createUserAddressSchema.parse(data);

      const userAddress = await this.userAddressRepository.create({
        userId,
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
        'Erro ao criar endereço do usuário (CreateUserAddressUseCase)',
        500,
      );
    }
  }
}
