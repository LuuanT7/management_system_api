import { IStudentDTO } from '@modules/Users/Student/DTOS/IStudentDTO';
import { IUserAddressDTO } from '@modules/Users/UserAddress/DTOS/IUserAddressDTO';
import { IUserDTO } from '@modules/Users/DTOS/IUserDTO';
import { IClassDTO } from '@modules/Class/DTOS/IClassDTO';
import { IEnrollmentDTO } from '@modules/Enrollment/DTOS/IEnrollmentDTO';
import { IAttendanceDTO } from '@modules/Attendance/dtos/IAttendenceDTO';
import { IGuardianDTO } from '@modules/Users/Guardian/DTOS/IGuardianDTO';

export interface IStudentProfileDTO {
  User: {
    id: string;
    name: string;
    email: string;
    cpf: string;
    birthDate: Date;
    gender: string;
    UserAddresses: IUserAddressDTO[];
    Guardian: {
      id: string;
      User: IUserDTO;
    };
  };
  Enrollments: IEnrollmentDTO[];
  // GradeReport: [];
  Attendance: IAttendanceDTO[];
}

export interface ITeacherProfileDTO {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'GUARDIAN' | 'STUDENT' | 'TEACHER';
  cpf?: string;
  rg?: string;
  teacher?: {
    id: string;
    User: IUserDTO;
    Class: IClassDTO;
    Student: IStudentDTO[];
  };
  UserAddress?: IUserAddressDTO;
}

export interface IProfileGuardianDTO {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone?: string | null;
  birthDate: Date;
  guardian?: {
    id: string;
    User: IUserDTO;
    Student: IStudentDTO[];
    Enrollment: IEnrollmentDTO[];
    // Payment: IPaymentDTO;
  };
}
