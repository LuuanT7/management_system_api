import { inject, injectable } from "tsyringe";
import { IClassMaterialRepository } from "../repositories/IClassMaterialRepository";
import { ClassMaterial } from "@prisma/client";

@injectable()
export class ListMaterialsByTeacherUseCase {
  constructor(
    @inject("ClassMaterialRepository")
    private repository: IClassMaterialRepository
  ) {}

  async execute(teacherId: string): Promise<ClassMaterial[]> {
    const materials = await this.repository.findByTeacher(teacherId);
    return materials;
  }
}
