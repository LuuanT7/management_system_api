import { inject, injectable } from "tsyringe";
import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";

@injectable()
export class FindAttendancesByPeriodUseCase {
  constructor(
    @inject("AttendanceRepository")
    private repository: IAttendanceRepository
  ) {}

  async execute(startDate: Date, endDate: Date): Promise<IAttendanceDTO[]> {
    const attendances = await this.repository.findByPeriod(startDate, endDate);
    return attendances;
  }
}
