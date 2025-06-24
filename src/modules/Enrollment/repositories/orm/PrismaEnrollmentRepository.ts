import { prisma } from "@shared/infra/database/prisma";
import { IEnrollmentRepository } from "../IEnrollmentRepository";
import { ICreateEnrollmentDTO, IEnrollmentDTO, IUpdateEnrollmentDTO } from "../../DTOS/IEnrollmentDTO";

export class PrismaEnrollmentRepository implements IEnrollmentRepository {
    async findAll(): Promise<IEnrollmentDTO[]> {
        const enrollments = await prisma.enrollment.findMany();
        return enrollments as IEnrollmentDTO[];
    }

    async findById(id: string): Promise<IEnrollmentDTO> {
        const enrollment = await prisma.enrollment.findUnique({ where: { id } });
        return enrollment as IEnrollmentDTO;
    }

    async findByStudentId(studentId: string): Promise<IEnrollmentDTO[]> {
        const enrollments = await prisma.enrollment.findMany({ where: { studentId } });
        return enrollments as IEnrollmentDTO[];
    }

    async findByClassId(classId: string): Promise<IEnrollmentDTO[]> {
        const enrollments = await prisma.enrollment.findMany({ where: { classId } });
        return enrollments as IEnrollmentDTO[];
    }

    async create({ studentId, classId, guardianId, paymentStatus, paymentId, active }: ICreateEnrollmentDTO): Promise<IEnrollmentDTO> {
        const enrollment = await prisma.enrollment.create({
            data: {
                studentId,
                classId,
                guardianId,
                paymentStatus,
                paymentId,
                active
            }
        });
        return enrollment as IEnrollmentDTO;
    }

    async update({ id, paymentStatus, paymentId, active }: IUpdateEnrollmentDTO): Promise<IEnrollmentDTO> {
        const enrollment = await prisma.enrollment.update({
            where: { id },
            data: {
                paymentStatus,
                paymentId,
                active
            }
        });
        return enrollment as IEnrollmentDTO;
    }

    async delete(id: string): Promise<string> {
        await prisma.enrollment.delete({
            where: { id }
        });
        return "Enrollment deleted successfully";
    }
} 