import { inject, injectable } from "tsyringe";
import { IGradeRepository } from "../repositories/IGradeRepository";
import { IGradeDTO } from "../dtos/IGradeDTO";

@injectable()
export class FindGradeByIdUseCase {
  constructor(
    @inject("GradeRepository")
    private gradeRepository: IGradeRepository
  ) {}

  async execute(id: string): Promise<IGradeDTO | null> {
    return this.gradeRepository.findById(id);
  }
}