import { IClassRepository } from "../repositories/IClassRepository";
import { IClassDTO } from "../dtos/IClassDTO";

export class CreateClassUseCase {
  constructor(private classRepository: IClassRepository) {}

  async execute(data: IClassDTO): Promise<IClassDTO> {
    return await this.classRepository.create(data);
  }
}
