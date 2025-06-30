import { IGradeDTO } from "../dtos/IGradeDTO";

export interface IGradeRepository {
  create(data: IGradeDTO): Promise<void>;
  update(id: string, data: Partial<IGradeDTO>): Promise<void>;
  findAll(): Promise<IGradeDTO[]>;
  findById(id: string): Promise<IGradeDTO | null>;
  delete(id: string): Promise<void>;
}