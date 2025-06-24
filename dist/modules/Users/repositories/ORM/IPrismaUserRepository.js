"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPrismaUserRepository = void 0;
const prisma_1 = require("@shared/infra/database/prisma");
//repositorio prisma, como se fosse um model do mvc utilizando orm prisma 
// todos os metodos criado na IUserRepository tem que estar aqui
class IPrismaUserRepository {
    async findAll() {
        const users = await prisma_1.prisma.user.findMany();
        return users;
    }
    async findById(id) {
        const user = await prisma_1.prisma.user.findUnique({ where: { id } });
        return user;
    }
    async create({ email, name, password, role, cpf, rg, gender, phone, birthDate }) {
        const user = await prisma_1.prisma.user.create({
            data: {
                name,
                email,
                password,
                role,
                cpf,
                rg,
                gender,
                phone,
                birthDate
            }
        });
        return user;
    }
    async update({ id, name, email, password, role, cpf, rg, gender, phone, birthDate }) {
        const user = await prisma_1.prisma.user.update({
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
                birthDate
            }
        });
        return user;
    }
    async delete(id) {
        await prisma_1.prisma.user.delete({
            where: { id }
        });
        return id;
    }
}
exports.IPrismaUserRepository = IPrismaUserRepository;
