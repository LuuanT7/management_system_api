import { inject, injectable } from "tsyringe";
import { IGradeRepository } from "../repositories/IGradeRepository";
import { IGradeDTO } from "../dtos/IGradeDTO";

@injectable()
export class FindAllGradesUseCase {
  constructor(
    @inject("GradeRepository")
    private gradeRepository: IGradeRepository
  ) {}

  async execute(): Promise<IGradeDTO[]> {
    return this.gradeRepository.findAll();
  }
}