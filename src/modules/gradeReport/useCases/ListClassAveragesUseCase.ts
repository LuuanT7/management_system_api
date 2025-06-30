import { IGradeReportRepository } from '../repositories/IGradeReportRepository';
import { IGradeReportDTO } from '../dto/IGradeReportDTO';

export class ListClassAveragesUseCase {
  constructor(private gradeReportRepository: IGradeReportRepository) {}

  async execute(classId: string): Promise<IGradeReportDTO[]> {
    // Busca todas as médias de boletim da turma informada
    const averages = await this.gradeReportRepository.listByClassId(classId);
    return averages;
  }
}