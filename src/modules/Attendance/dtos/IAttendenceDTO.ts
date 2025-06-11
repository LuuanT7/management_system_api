export interface IAttendanceDTO{
    id?: string;
    studentId: string;
    classId: string;
    date: Date;
    present: boolean
}