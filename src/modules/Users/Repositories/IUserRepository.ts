import { IPaginatedResult, IPaginationParams } from "@shared/interfaces/pagination";
import { ICreateUserDTO, IResetPassword, IUpdateUserDTO, IUserDTO } from "../DTOS/IUserDTO";


// Tipando o repositorio prisma com interface de metodos especificas
export interface IUserRepository {
  findAll(queryParams: IPaginationParams): Promise<IPaginatedResult<IUserDTO>>
  findById(id: string): Promise<IUserDTO>
  generateResetToken(data: IResetPassword): Promise<IResetPassword>
  create(data: ICreateUserDTO): Promise<ICreateUserDTO>
  update(data: IUpdateUserDTO): Promise<IUpdateUserDTO>
  delete(id: string): Promise<string>
}