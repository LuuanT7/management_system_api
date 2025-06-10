import { promises } from "dns";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";

export interface IAttendanceRepository{
    create(data: IAttendanceDTO): Promise<void>;
    findByStudentAndDate(studentId: string, date: Date): Promise<IAttendanceDTO | null>
    listByClass(classId: string): Promise<IAttendanceDTO[]>
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any | null>;
    delete(id: string): Promise<any>;
    update(id: string, data: Partial<IAttendanceDTO>): Promise<any>;
    findByStudentAndClass(studentId: string, classId: string): Promise<any | null>;
}


