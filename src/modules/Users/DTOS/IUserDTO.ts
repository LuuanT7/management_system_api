import { ICreateStudentDTO } from "../Student/DTOS/IStudentDTO";
import { IGuardianDTO } from "../Guardian/DTOS/IGuardianDTO";
import { ITeacherResponseDTO } from "../Teacher/DTOS/ITeacherDTO";

export interface IUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'GUARDIAN' | 'STUDENT' | 'TEACHER'
  cpf?: string;
  rg?: string;
  gender?: string;
  phone?: string;
  birthDate?: Date;

}

export interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'GUARDIAN' | 'STUDENT' | 'TEACHER'
  cpf?: string;
  rg?: string;
  gender?: string;
  phone?: string;
  birthDate?: Date;
}

export interface IUpdateUserDTO {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  role?: 'ADMIN' | 'GUARDIAN' | 'STUDENT' | 'TEACHER'
  cpf?: string;
  rg?: string;
  gender?: string;
  phone?: string;
  birthDate?: Date;

}

export interface IResetPassword {
  resetToken?: string
  expiresIn?: Date
  newPassword?: string,
  againNewPassword?: string,
  userId?: string
  email?: string
}

export interface IFindAllQueryParamsDTO {
  page?: number;
  limit?: number;
  search?: string;
}




