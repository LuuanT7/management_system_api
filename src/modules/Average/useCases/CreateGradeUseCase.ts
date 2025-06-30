import { inject, injectable } from "tsyringe";
import { IGradeRepository } from "../repositories/IGradeRepository";
import { IGradeDTO } from "../dtos/IGradeDTO";

@injectable()
export class CreateGradeUseCase {
  constructor(
    @inject("GradeRepository")
    private gradeRepository: IGradeRepository
  ) {}

  async execute(data: IGradeDTO): Promise<void> {
    await this.gradeRepository.create(data);
  }
}
