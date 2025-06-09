import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { container } from "tsyringe";
import { IPrismaUserRepository } from "@modules/Users/repositories/ORM/IPrismaUserRepository";
import { IEnrollmentRepository } from "@modules/Enrollment/repositories/IEnrollmentRepository";
import { PrismaEnrollmentRepository } from "@modules/Enrollment/repositories/orm/PrismaEnrollmentRepository";

container.registerSingleton<IUserRepository>(
  'UserRepository',
  IPrismaUserRepository,
);

container.registerSingleton<IEnrollmentRepository>(
  'EnrollmentRepository',
  PrismaEnrollmentRepository,
);
