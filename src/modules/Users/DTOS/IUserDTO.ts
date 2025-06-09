import { Role } from "@prisma/client";

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