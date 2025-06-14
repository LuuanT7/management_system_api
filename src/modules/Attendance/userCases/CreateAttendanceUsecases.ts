import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";

export class CreateAttendanceUsecase {
  constructor(private attendanceRepository: IAttendanceRepository) {}

  async execute(data: { studentId?: string; classId?: string; date?: string; status?: 'PRESENT' | 'ABSENT' | 'LATE' }) {
    const { studentId, classId, date, status } = data;

    if (!studentId || !classId) {
      throw new Error("studentId e classId são obrigatórios.");
    }

    // Define a presença com base no status
    const present = status === "PRESENT";

    const attendanceData: IAttendanceDTO = {
      studentId,
      classId,
      date: date ? new Date(date) : new Date(),
      present,
    };

    await this.attendanceRepository.create(attendanceData);
  }
}
