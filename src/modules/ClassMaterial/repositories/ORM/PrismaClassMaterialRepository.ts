import { prisma } from "@shared/infra/database/prisma";
import { IClassMaterialRepository } from "../IClassMaterialRepository";
import { ICreateClassMaterialDTO } from "../../dtos/ClassMaterialDTO";
import { IClassMaterialForStudentDTO } from "../../dtos/ClassMaterialDTO";
import { ClassMaterial } from "@prisma/client";

export class PrismaClassMaterialRepository implements IClassMaterialRepository {
  async create(data: ICreateClassMaterialDTO): Promise<ClassMaterial> {
    const material = await prisma.classMaterial.create({
      data: {
        title: data.title,
        description: data.description,
        fileUrl: data.fileUrl,
        classId: data.classId,
        isPublished: data.isPublished ?? false
      },
    });
    return material;
  }

  async findPublishedByClass(classId: string): Promise<ClassMaterial[]> {
    const materials = await prisma.classMaterial.findMany({
      where: {
        classId,
        isPublished: true,
      },
    });
    return materials;
  }

  async findByTeacher(teacherId: string): Promise<ClassMaterial[]> {
    const materials = await prisma.classMaterial.findMany({
      where: {
        class: {
          teacherId: teacherId,
        },
      },
      include: {
        class: true,
      },
    });

    return materials;
  } 
  
async findPublishedForStudentsByClass(classId: string): Promise<ClassMaterial[]> {
  const materials = await prisma.classMaterial.findMany({
    where: {
      classId: classId,
      isPublished: true,
    },
  });

  return materials;
}
}

