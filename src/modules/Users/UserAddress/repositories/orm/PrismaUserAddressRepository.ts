import { IUserAddressRepository } from '../IUserAddressRepository';
import {
  ICreateUserAddressDTO,
  IUpdateUserAddressDTO,
  IUserAddressDTO,
} from '../../DTOS/IUserAddressDTO';
import { prisma } from '@shared/infra/database/prisma';

export class PrismaUserAddressRepository implements IUserAddressRepository {
  async findByUserId(userId: string): Promise<IUserAddressDTO> {
    const userAddress = await prisma.userAddress.findFirst({
      where: { userId },
    });
    return userAddress;
  }

  async create({
    userId,
    address,
    number,
    complement,
    neighborhood,
    city,
    state,
    zipCode,
  }: ICreateUserAddressDTO): Promise<IUserAddressDTO> {
    const userAddress = await prisma.userAddress.create({
      data: {
        userId,
        address,
        number,
        complement,
        neighborhood,
        city,
        state,
        zipCode,
      },
    });
    return userAddress;
  }

  async update({
    id,
    address,
    number,
    complement,
    neighborhood,
    city,
    state,
    zipCode,
  }: IUpdateUserAddressDTO): Promise<IUserAddressDTO> {
    const userAddress = await prisma.userAddress.update({
      where: { id },
      data: { address, number, complement, neighborhood, city, state, zipCode },
    });
    return userAddress;
  }

  async delete(id: string): Promise<void> {
    await prisma.userAddress.delete({ where: { id } });
  }
}
