import { IUpdateAttendanceDTO, IAttendanceDTO, ICreateAttendanceDTO , IClassDTO } from "../dtos/IAttendenceDTO";
export interface IAttendanceRepository {
    findAll(): Promise<IAttendanceDTO[]>;
    findById(id: string): Promise<IAttendanceDTO>;
    findByStudentId(studentId: string): Promise<IAttendanceDTO[]>;
    findByClassId(classId: string): Promise<IAttendanceDTO[]>;
    create(data: ICreateAttendanceDTO): Promise<IAttendanceDTO>;
    update(data: IUpdateAttendanceDTO): Promise<IAttendanceDTO>;
    delete(id: string): Promise<string>;
    findByClass(classId: string): Promise<IAttendanceDTO[]>;
    findClassesByTeacher(teacherId: string): Promise<IClassDTO[]>;
    findByGuardian(guardianId: string): Promise<IAttendanceDTO[]>;
    findByPeriod(startDate: Date, endDate: Date): Promise<IAttendanceDTO[]>;

} 


