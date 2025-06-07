import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";

export class CreateAttendanceUseCase {
  constructor(private attendanceRepository: IAttendanceRepository) {}

  async execute(data: IAttendanceDTO): Promise<void> {
    const existing = await this.attendanceRepository.findByStudentAndDate(data.studentId, data.date);

    if (existing) {
      throw new Error("Attendance already registered for this student on this date.");
    }

    await this.attendanceRepository.create(data);
  }
}
