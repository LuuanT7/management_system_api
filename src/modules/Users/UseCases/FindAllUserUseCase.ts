import { IUserRepository } from "@modules/Users/Repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { IUserDTO } from "../DTOS/IUserDTO";


@injectable()
export class FindAllUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}
        
  async execute(): Promise<IUserDTO[]> {

    try {
      const users = await this.userRepository.findAll();
    return users;
    } catch (err) {
      console.error(err);
      throw new Error("Erro ao buscar usuários (FindAllUserUseCase)");
    }
    
  }
}