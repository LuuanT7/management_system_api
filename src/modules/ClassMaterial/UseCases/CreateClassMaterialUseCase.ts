import { inject, injectable } from "tsyringe";
import { IClassMaterialRepository } from "../repositories/IClassMaterialRepository";
import { ICreateClassMaterialDTO } from "../dtos/ClassMaterialDTO";
import { ClassMaterial } from "@prisma/client";
import path from "path";
import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateClassMaterialUseCase {
  constructor(
    @inject("ClassMaterialRepository")
    private repository: IClassMaterialRepository
  ) {}

  async execute(data: ICreateClassMaterialDTO): Promise<ClassMaterial> {
    const allowedExtensions = [".pdf", ".ppt", ".pptx", ".doc", ".docx", ".png", ".jpg", ".jpeg"];

    if (data.fileUrl) {
      const fileExtension = path.extname(data.fileUrl).toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        throw new AppError(`Tipo de arquivo não permitido: ${fileExtension}. Tipos aceitos: ${allowedExtensions.join(", ")}`);
      }
    }

    const material = await this.repository.create(data);
    return material;
  }
}

