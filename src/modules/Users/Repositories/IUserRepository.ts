import { ICreateUserDTO, IUpdateUserDTO, IUserDTO } from "../DTOS/IUserDTO";

export interface IUserRepository {
  findAll(): Promise<IUserDTO[]>
  findById(id: string): Promise<IUserDTO>
  create(data: ICreateUserDTO): Promise<IUserDTO>
  update(data: IUpdateUserDTO): Promise<IUserDTO>
  delete(id: string): Promise<string>
}