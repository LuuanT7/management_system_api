import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { IUpdateUserDTO } from "../DTOS/IUserDTO";

const updateUserSchema = z.object({
  id: z.string().uuid({
    message: "ID do usuário inválido. Forneça um UUID válido."
  })
});

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(data: IUpdateUserDTO): Promise<IUpdateUserDTO> {

    const { id: validatedId } = updateUserSchema.parse({ data });

    try {
      const user = await this.userRepository.update({
        id: validatedId,
        ...data
      });

      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao atualizar usuário (UpdateUserUseCase)");
    }


  }

}