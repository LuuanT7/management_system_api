import { inject, injectable } from "tsyringe";
import { IGradeAverageRepository } from "../repositories/IGradeAverageRepository";
import { IGradeAverageDTO } from "../dtos/IGradeAverageDTO";

@injectable()
export class FindGradeByIdUseCase {
  constructor(
    @inject("GradeRepository")
    private gradeRepository: IGradeAverageRepository
  ) {}

  async execute(id: string): Promise<IGradeAverageDTO | null> {
    return this.gradeRepository.findById(id);
  }
}