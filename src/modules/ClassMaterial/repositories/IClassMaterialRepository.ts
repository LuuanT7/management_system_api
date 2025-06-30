import { ICreateClassMaterialDTO } from "../dtos/ClassMaterialDTO";
import { ClassMaterial } from "@prisma/client";

export interface IClassMaterialRepository {
  create(data: ICreateClassMaterialDTO): Promise<ClassMaterial>;
  findPublishedByClass(classId: string): Promise<ClassMaterial[]>;
  findByTeacher(teacherId: string): Promise<ClassMaterial[]>;
  findPublishedForStudentsByClass(classId: string): Promise<ClassMaterial[]>;
}
