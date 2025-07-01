import { inject, injectable } from "tsyringe";
import { IGradeAverageRepository } from "../repositories/IGradeAverageRepository";
import { IGradeAverageDTO } from "../dtos/IGradeAverageDTO";

@injectable()
export class CreateGradeUseCase {
  constructor(
    @inject("GradeRepository")
    private gradeRepository: IGradeAverageRepository
  ) {}

  async execute(data: IGradeAverageDTO): Promise<void> {
    await this.gradeRepository.create(data);
  }
}
