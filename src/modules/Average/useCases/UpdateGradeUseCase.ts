import { inject, injectable } from "tsyringe";
import { IGradeRepository } from "../repositories/IGradeRepository";
import { IGradeDTO } from "../dtos/IGradeDTO";

@injectable()
export class UpdateGradeUseCase {
  constructor(
    @inject("GradeRepository")
    private gradeRepository: IGradeRepository
  ) {}

  async execute(id: string, data: Partial<IGradeDTO>): Promise<void> {
    await this.gradeRepository.update(id, data);
  }
}