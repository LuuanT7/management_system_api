import { Class } from '@prisma/client';

export interface ICreateClassDTO {
  name: string;
  subject: string;
  teacherId: number;
  schedule: string;
}

export interface IClassRepository {
  create(data: ICreateClassDTO): Promise<Class>;
  findById(id: number): Promise<Class | null>; 
  list(): Promise<Class[]>;
  delete(id: number): Promise<void>; 
}
