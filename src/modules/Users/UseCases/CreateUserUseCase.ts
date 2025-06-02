import { IUserRepository } from "@modules/Users/Repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../DTOS/IUserDTO";
import { z } from "zod";

const createUserSchema = z.object({
  name: z.string({required_error: "Nome é obrigatório"})
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  
  email: z.string({required_error: "Email é obrigatório"})
    .email("Email inválido")
    .min(5, "Email deve ter no mínimo 5 caracteres")
    .max(100, "Email deve ter no máximo 100 caracteres"),
  
  password: z.string({required_error: "Senha é obrigatória"})
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(100, "Senha deve ter no máximo 100 caracteres")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número"),
  
  role: z.enum(["ADMIN", "TEACHER", "STUDENT", "GUARDIAN"], {
    required_error: "Papel é obrigatório",
    errorMap: () => ({ message: "Papel inválido. Deve ser: ADMIN, TEACHER, STUDENT ou GUARDIAN" })
  })
}).required().strict();

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(data: ICreateUserDTO): Promise<ICreateUserDTO> {

    try {
      const { name, email, password, role } = createUserSchema.parse(data);
      const user = await this.userRepository.create({ name, email, password, role });

      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao criar usuário (CreateUserUseCase)");
    }
    
  }
}