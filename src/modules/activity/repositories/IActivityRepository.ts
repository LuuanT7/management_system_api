import { Activity } from '@prisma/client';
import { ICreateActivityDTO } from '../dtos/ICreateActivityDTO';

export interface IActivityRepository {
  listAll(): Promise<Activity[]>; 
  create(data: ICreateActivityDTO): Promise<Activity>;
  listByClassId(classId: string): Promise<Activity[]>;
  listByStudentId(studentRA: number): Promise<Activity[]>;  // alterado aqui
  delete(id: string): Promise<void>;
}
