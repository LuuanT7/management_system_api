import { ICreateStudentDTO, IProfileStudentDTO } from '../DTOS/IStudentDTO';

export interface IStudentRepository {
  create(data: ICreateStudentDTO): Promise<ICreateStudentDTO>;
  studentProfile(userId: string): Promise<IProfileStudentDTO>;
}
