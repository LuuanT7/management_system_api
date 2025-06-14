import { IAttendanceRepository } from "../repositories/IAttendanceRepository";

export class FindAttendanceByIdUsecase {
  constructor(private repository: IAttendanceRepository) {}

  async execute(id: string) {
    const attendance = await this.repository.findById(id);
    if (!attendance) {
      throw new Error("Attendance not found.");
    }

    return attendance;
  }
}
