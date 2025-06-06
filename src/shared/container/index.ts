import { container } from "tsyringe";
import { IClassRepository } from "../../modules/class/repositories/IClassRepository";
import { PrismaClassRepository } from "../../modules/class/repositories/implementations/PrismaClassRepository";
import { CreateClassUseCase } from "../../modules/class/useCases/CreateClassUseCase";

container.registerSingleton<IClassRepository>(
  "ClassRepository",
  PrismaClassRepository
);

container.registerSingleton<CreateClassUseCase>(
  CreateClassUseCase
);