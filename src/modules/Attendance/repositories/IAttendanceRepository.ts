import { IUpdateAttendanceDTO, IAttendanceDTO, ICreateAttendanceDTO } from "../dtos/IAttendenceDTO";

export interface IAttendanceRepository {
    findAll(): Promise<IAttendanceDTO[]>;
    findById(id: string): Promise<IAttendanceDTO>;
    findByStudentId(studentId: string): Promise<IAttendanceDTO[]>;
    findByClassId(classId: string): Promise<IAttendanceDTO[]>;
    create(data: ICreateAttendanceDTO): Promise<IAttendanceDTO>;
    update(data: IUpdateAttendanceDTO): Promise<IAttendanceDTO>;
    delete(id: string): Promise<string>;
    findByClass(classId: string): Promise<IAttendanceDTO[]>;
} 


