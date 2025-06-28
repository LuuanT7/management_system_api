import { ICreateStudentDTO } from '../DTOS/IStudentDTO';

export interface IStudentRepository {
  create(data: ICreateStudentDTO): Promise<ICreateStudentDTO>;
}
