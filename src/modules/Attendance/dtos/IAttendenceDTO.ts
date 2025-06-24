export interface IAttendanceDTO {
    id: string;
    studentId: string;
    classId: string;
    date: Date;
    present: boolean;
}

export interface ICreateAttendanceDTO {
    studentId: string;
    classId: string;
    date: Date;
    present: boolean;
}

export interface IUpdateAttendanceDTO {
    id: string;
    present?: boolean;
}

export interface IClassDTO {
  id: string;
  name: string;
  subject: string;
  shift: string;
  teacherId: string;
}