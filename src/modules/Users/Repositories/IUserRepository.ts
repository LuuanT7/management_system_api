import { ICreateUserDTO, IUpdateUserDTO, IUserDTO } from "../DTOS/IUserDTO";


// Tipando o repositorio prisma com interface de metodos especificas
export interface IUserRepository {
  findAll(): Promise<IUserDTO[]>
  findById(id: string): Promise<IUserDTO>
  create(data: ICreateUserDTO): Promise<ICreateUserDTO>
  update(data: IUpdateUserDTO): Promise<IUpdateUserDTO>
  delete(id: string): Promise<string>
}