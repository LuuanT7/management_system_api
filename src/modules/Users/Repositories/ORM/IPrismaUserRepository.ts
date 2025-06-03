import { IUserDTO, ICreateUserDTO, IUpdateUserDTO } from "@modules/Users/DTOS/IUserDTO";
import { IUserRepository } from "../IUserRepository";
import { prisma } from "@shared/infra/database/prisma";


//repositorio prisma, como se fosse um model do mvc utilizando orm prisma 
// todos os metodos criado na IUserRepository tem que estar aqui
export class IPrismaUserRepository implements IUserRepository {
  async findAll(): Promise<IUserDTO[]> {
    const users = await prisma.user.findMany()
    return users
  }
  async findById(id: string): Promise<IUserDTO> {
    const user = await prisma.user.findUnique({ where: { id } })
    return user
  }
  async create({ email, name, password, role }: ICreateUserDTO): Promise<ICreateUserDTO> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role
      }
    })
    return user
  }
  async update({ id, name, email, password, role }: IUpdateUserDTO): Promise<IUserDTO> {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
        role
      }
    })
    return user
  }
  async delete(id: string): Promise<string> {
    await prisma.user.delete({
      where: { id }
    })
    return id
  }
}
