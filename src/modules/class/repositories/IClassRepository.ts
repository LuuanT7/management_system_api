import { Class } from '@prisma/client';

export interface ICreateClassDTO {
  name: string;
  subject: string;
  teacherId: string;
  schedule: string;
}

export interface IClassRepository {
  create(data: ICreateClassDTO): Promise<Class>;
  findById(id: string): Promise<Class | null>;
  list(): Promise<Class[]>;
  delete(id: string): Promise<void>;
}