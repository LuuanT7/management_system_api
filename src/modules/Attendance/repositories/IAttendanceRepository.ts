import { promises } from "dns";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";

export interface IAttendanceRepository{
    create(data: IAttendanceDTO): Promise<void>;
    findByStudentAndDate(studentId: string, date: Date): Promise<IAttendanceDTO | null>
    listByClass(classId: string): Promise<IAttendanceDTO[]>
}