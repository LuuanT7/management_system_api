import { inject, injectable } from "tsyringe";
import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";

@injectable()
export class FindAttendancesByGuardianUseCase {
  constructor(
    @inject("AttendanceRepository")
    private repository: IAttendanceRepository
  ) {}

  async execute(guardianId: string): Promise<IAttendanceDTO[]> {
    const attendances = await this.repository.findByGuardian(guardianId);
    return attendances;
  }
}
