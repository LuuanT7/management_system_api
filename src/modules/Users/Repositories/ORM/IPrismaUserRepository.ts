import {
  IUserDTO,
  ICreateUserDTO,
  IUpdateUserDTO,
  IResetPassword,
} from '@modules/Users/DTOS/IUserDTO';
import { prisma } from '@shared/infra/database/prisma';
import { Prisma } from '@prisma/client';
import {
  IPaginatedResult,
  IPaginationParams,
} from '@shared/interfaces/pagination';
import { IUserRepository } from '../IUserRepository';

//repositorio prisma, como se fosse um model do mvc utilizando orm prisma
// todos os metodos criado na IUserRepository tem que estar aqui
export class IPrismaUserRepository implements IUserRepository {
  async findAll({
    page,
    limit,
    search,
  }: IPaginationParams): Promise<IPaginatedResult<IUserDTO>> {
    // IPaginatedResult é uma interface que tipa a promise de retorno do findAll passando o IUserDTO e o IPaginationParams

    // Validação básica dos parâmetros
    const pageNumber = page ? Math.max(1, Number(page)) : 1; // if ternário para caso o usúario não passe o page, ele vai ser 1, o mesmo vale para o limit
    const limitNumber = limit ? Math.max(1, Math.min(Number(limit), 100)) : 10; // Limita a 100 itens por página

    //Inicializa o where vazio tipando com o prismaUserWhereInput
    const where: Prisma.UserWhereInput = {};

    // Se o usuário passar um search, ele vai buscar pelo name, email ou cpf
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { cpf: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Calcula o offset baseado na página atual
    const offset = (pageNumber - 1) * limitNumber;

    // Executa as queries em paralelo (melhor performance)
    const users = await prisma.user.findMany({
      where,
      skip: offset,
      take: limitNumber,
      orderBy: { createdAt: 'desc' }, // Ordena por data de criação, opcional ser o createdAt
    });

    // query do prisma para contar o total de usuários
    const total = await prisma.user.count({ where });
    const totalPages = Math.ceil(total / limitNumber); // Calcula o total de páginas

    // Retorna os dados da query com os metadados paginados
    return {
      data: users,
      pagination: {
        total,
        totalPages,
        currentPage: pageNumber,
        limit: limitNumber,
      },
    };
  }
  async findById(id: string): Promise<IUserDTO> {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        UserAddresses: true,
      },
    });
    return user;
  }
  async create({
    email,
    name,
    password,
    role,
    cpf,
    rg,
    gender,
    phone,
    birthDate,
  }: ICreateUserDTO): Promise<ICreateUserDTO> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
        cpf,
        rg,
        gender,
        phone,
        birthDate,
      },
    });
    return user;
  }
  async update({
    id,
    name,
    email,
    password,
    role,
    cpf,
    rg,
    gender,
    phone,
    birthDate,
  }: IUpdateUserDTO): Promise<IUserDTO> {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
        role,
        cpf,
        rg,
        gender,
        phone,
        birthDate,
      },
    });
    return user;
  }
  async delete(id: string): Promise<string> {
    await prisma.user.delete({
      where: { id },
    });
    return id;
  }
  async generateResetToken({ resetToken, expiresIn, userId }: IResetPassword): Promise<IResetPassword> {
    const resetPssword = await prisma.resetUserPassword.create({ data: { resetToken, expiresIn, userId } })
    return resetPssword
  }
}
