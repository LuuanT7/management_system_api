// src/modules/Attendance/useCases/UpdateAttendanceUsecase.ts

import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";

export class UpdateAttendanceUsecase {
  constructor(private attendanceRepository: IAttendanceRepository) {}

  async execute(id: string, data: Partial<IAttendanceDTO>) {
    const updated = await this.attendanceRepository.update(id, data);
    return updated;
  }
}
