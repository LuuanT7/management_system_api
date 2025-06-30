import { inject, injectable } from "tsyringe";
import { IClassMaterialRepository } from "../repositories/IClassMaterialRepository";
import { ClassMaterial } from "@prisma/client";

@injectable()
export class ListPublishedMaterialsByClassUseCase {
  constructor(
    @inject("ClassMaterialRepository")
    private repository: IClassMaterialRepository
  ) {}

  async execute(classId: string): Promise<ClassMaterial[]> {
    const materials = await this.repository.findPublishedByClass(classId);
    return materials;
  }
}
