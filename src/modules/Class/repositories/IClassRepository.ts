import { IClassDTO } from '../dtos/IClassDTO';

export interface IClassFilters {
  teacherId?: string;
  subject?: string;
  shift?: 'MORNING' | 'AFTERNOON';
}

export interface IClassRepository {
  findAll(filters?: IClassFilters): Promise<IClassDTO[]>;
}
