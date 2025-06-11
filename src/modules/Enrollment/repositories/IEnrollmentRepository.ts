import { ICreateEnrollmentDTO, IEnrollmentDTO, IUpdateEnrollmentDTO } from "../DTOS/IEnrollmentDTO";

export interface IEnrollmentRepository {
    findAll(): Promise<IEnrollmentDTO[]>;
    findById(id: string): Promise<IEnrollmentDTO>;
    findByStudentId(studentId: string): Promise<IEnrollmentDTO[]>;
    findByClassId(classId: string): Promise<IEnrollmentDTO[]>;
    create(data: ICreateEnrollmentDTO): Promise<IEnrollmentDTO>;
    update(data: IUpdateEnrollmentDTO): Promise<IEnrollmentDTO>;
    delete(id: string): Promise<string>;
} 