import { IUserDTO, ICreateUserDTO, IUpdateUserDTO } from "@modules/Users/DTOS/IUserDTO";
import { IUserRepository } from "../IUserRepository";
import { prisma } from "@shared/infra/DataBase/prisma";

export class IPrismaUserRepository implements IUserRepository {
  async findAll(): Promise<IUserDTO[]> {
    const users = await prisma.user.findMany()
    return users
  }
  async findById(id: string): Promise<IUserDTO> {
    const user = await prisma.user.findUnique({
      where: { id }
    })
    return user
  }
  async create({ name, email, password, role }: ICreateUserDTO): Promise<IUserDTO> {
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
