import { inject, injectable } from 'tsyringe';
import { z } from 'zod';
import { IUpdateUserDTO } from '../DTOS/IUserDTO';
import { IUserRepository } from '../Repositories/IUserRepository';

const updateUserSchema = z.object({
  id: z.string({
    required_error: 'ID do usuário é obrigatório',
    invalid_type_error: 'ID do usuário deve ser uma string',
  }),
});

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(data: IUpdateUserDTO): Promise<IUpdateUserDTO> {
    const { id } = updateUserSchema.parse(data);

    try {
      const user = await this.userRepository.update({
        id,
        ...data,
      });

      return user;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao atualizar usuário (UpdateUserUseCase)');
    }
  }
}
