import { IAttendanceRepository } from "../repositories/IAttendanceRepository";

export class DeleteAttendanceUsecase {
  constructor(private attendanceRepository: IAttendanceRepository) {}

  async execute(id: string) {
    const deleted = await this.attendanceRepository.delete(id);
    return deleted;
  }
}
