import { IAttendanceRepository } from "../repositories/IAttendanceRepository";

export class FindAllAttendanceUsecase {
  constructor(private repository: IAttendanceRepository) {}

  async execute(id: string) {
    const attendances = await this.repository.findAll();
    return attendances;
  }
}
