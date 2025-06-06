import { IClassDTO } from "../dtos/IClassDTO";

export interface IClassRepository {
  create(data: IClassDTO): Promise<IClassDTO>;
  findById(id: string): Promise<IClassDTO | null>;
  findAll(): Promise<IClassDTO[]>;
}
