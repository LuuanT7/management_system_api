import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { IUserDTO } from "../DTOS/IUserDTO";
import { IPaginatedResult, IPaginationParams } from "@shared/interfaces/pagination";


@injectable()
export class FindAllUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(queryParams: IPaginationParams): Promise<IPaginatedResult<IUserDTO>> {
    
    try {
      const users = await this.userRepository.findAll(queryParams);
      return users;
    } catch (err) {
      console.error(err);
      throw new Error("Erro ao buscar usuários (FindAllUserUseCase)");
    }

  }
}