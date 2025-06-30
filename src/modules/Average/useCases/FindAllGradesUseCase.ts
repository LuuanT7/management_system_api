import { inject, injectable } from "tsyringe";
import { IGradeAverageRepository } from "../repositories/IGradeAverageRepository";
import { IGradeAverageDTO } from "../dtos/IGradeAverageDTO";

@injectable()
export class FindAllGradesUseCase {
  constructor(
    @inject("GradeRepository")
    private gradeRepository: IGradeAverageRepository
  ) {}

  async execute(): Promise<IGradeAverageDTO[]> {
    return this.gradeRepository.findAll();
  }
}