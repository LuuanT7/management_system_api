import { prisma } from "@shared/infra/database/prisma";
import { ICreateGuardianDTO, IUpdateGuardianDTO } from "../../DTOS/IGuardianDTO";
import { IGuardianRepository } from "../IGuardianRepository";


export class PrismaGuardianRepository implements IGuardianRepository {

    async create({ userId }: ICreateGuardianDTO): Promise<ICreateGuardianDTO> {
        const guardian = await prisma.guardian.create({
            data: {
                userId
            }
        });
        return guardian;
    }



}