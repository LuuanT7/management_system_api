import { inject, injectable } from "tsyringe";
import { IGradeAverageRepository } from "../repositories/IGradeAverageRepository";

@injectable()
export class DeleteGradeUseCase {
  constructor(
    @inject("GradeRepository")
    private gradeRepository: IGradeAverageRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.gradeRepository.delete(id);
  }
}