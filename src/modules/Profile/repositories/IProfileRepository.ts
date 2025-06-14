import { IProfileStudentDTO } from '../DTOS/IProfileDTO';

export interface IProfileRepository {
  profileStudent(id: string): Promise<IProfileStudentDTO>;
}
