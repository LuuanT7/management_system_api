import { injectable, inject } from "tsyringe";
import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";
import { AppError } from "../../../shared/errors/AppError";

@injectable()
export class FindAttendanceByIdUseCase {
  constructor(
    @inject("AttendanceRepository")
    private attendanceRepository: IAttendanceRepository
  ) {}

  async execute(id: string): Promise<IAttendanceDTO> {
    const attendance = await this.attendanceRepository.findById(id);
    if (!attendance) {
      throw new AppError("Attendance not found", 404);
    }
    return attendance;
  }
}
