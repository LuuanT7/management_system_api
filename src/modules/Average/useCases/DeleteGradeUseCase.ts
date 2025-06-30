import { inject, injectable } from "tsyringe";
import { IGradeRepository } from "../repositories/IGradeRepository";

@injectable()
export class DeleteGradeUseCase {
  constructor(
    @inject("GradeRepository")
    private gradeRepository: IGradeRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.gradeRepository.delete(id);
  }
}