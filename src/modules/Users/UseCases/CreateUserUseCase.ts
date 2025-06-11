import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../DTOS/IUserDTO";
import { z } from "zod";


// Schema de validação usando lib zods
const createUserSchema = z.object({
  name: z.string({ required_error: "Nome é obrigatório" })
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),

  email: z.string({ required_error: "Email é obrigatório" })
    .email("Email inválido")
    .min(5, "Email deve ter no mínimo 5 caracteres")
    .max(100, "Email deve ter no máximo 100 caracteres"),

  password: z.string({ required_error: "Senha é obrigatória" })
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(100, "Senha deve ter no máximo 100 caracteres")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número"),

  role: z.enum(['ADMIN', 'GUARDIAN', 'STUDENT', 'TEACHER'], {
    invalid_type_error: "Tipo de função inválida",
    required_error: "Função é obrigatória",
  }),
}).required().strict();

@injectable()
//classe construtura, estudar classe contrutoria e injeção de dependencia
// estudar classe e arquitetura solids
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(data: ICreateUserDTO): Promise<ICreateUserDTO> {

    try {
      // utilizando o schema de validação para validar o DATA
      const { name, email, password, role } = createUserSchema.parse(data);

      //passando os dados validados para a função de criar
      const user = await this.userRepository.create({
        name,
        email,
        password,
        role,
        cpf: data.cpf,
        rg: data.rg,
        gender: data.gender,
        phone: data.phone,
        birthDate: data.birthDate
      });

      return user;

    } catch (error) {
      console.error(error);
      throw new Error("Erro ao criar usuário (CreateUserUseCase)");
    }

  }
}