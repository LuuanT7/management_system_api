import { IGradeAverageDTO } from "../dtos/IGradeAverageDTO";

export interface IGradeAverageRepository {
  create(data: IGradeAverageDTO): Promise<void>;
  update(id: string, data: Partial<IGradeAverageDTO>): Promise<void>;
  findAll(): Promise<IGradeAverageDTO[]>;
  findById(id: string): Promise<IGradeAverageDTO | null>;
  delete(id: string): Promise<void>;
}