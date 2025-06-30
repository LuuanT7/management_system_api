import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { IUserRepository } from "../Repositories/IUserRepository";

const findByIdSchema = z.object({
  id: z.string().uuid({
    message: "ID do usuário inválido. Forneça um UUID válido."
  })
});

@injectable()
export class FindByIdUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(id: string) {

    const { id: validatedId } = findByIdSchema.parse({ id });
    try {


      const user = await this.userRepository.findById(validatedId);

      return user;

    } catch (error) {
      console.error(error);
      throw new Error("Erro ao buscar usuário por ID (FindByIdUserUseCase)");
    }
  }
}