import {
  IProfileGuardianDTO,
  IStudentProfileDTO,
  ITeacherProfileDTO,
} from '../DTOS/IProfileDTO';

export interface IProfileRepository {
  profileStudent(userId: string): Promise<IStudentProfileDTO>;
  profileTeacher(id: string): Promise<ITeacherProfileDTO>;
  profileGuardian(id: string): Promise<IProfileGuardianDTO>;
}
