import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../Repositories/IUserRepository";
import { z } from "zod";

const deleteUserSchema = z.object({
  id: z.string().uuid({
    message: "ID do usuário inválido. Forneça um UUID válido."
  })
});       

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(id: string) {
    const { id: validatedId } = deleteUserSchema.parse({ id });

    try {
      await this.userRepository.delete(validatedId);  

      return "USER DELETED SUCCESSFULLY";
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao deletar usuário (DeleteUserUseCase)");
    }
  }
}