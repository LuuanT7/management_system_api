import { inject, injectable } from "tsyringe";
import { IGradeAverageRepository } from "../repositories/IGradeAverageRepository";
import { IGradeAverageDTO } from "../dtos/IGradeAverageDTO";

@injectable()
export class UpdateGradeUseCase {
  constructor(
    @inject("GradeRepository")
    private gradeRepository: IGradeAverageRepository
  ) {}

  async execute(id: string, data: Partial<IGradeAverageDTO>): Promise<void> {
    await this.gradeRepository.update(id, data);
  }
}