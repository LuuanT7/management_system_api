import { Role } from "@prisma/client";

export interface IUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface IUpdateUserDTO {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
}