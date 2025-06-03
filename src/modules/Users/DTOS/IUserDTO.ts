import { Role, Student } from "@prisma/client";

export interface IUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'GUARDIAN' | 'STUDENT' | 'TEACHER'
}

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'GUARDIAN' | 'STUDENT' | 'TEACHER'

}

export interface IUpdateUserDTO {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  role: 'ADMIN' | 'GUARDIAN' | 'STUDENT' | 'TEACHER'

}