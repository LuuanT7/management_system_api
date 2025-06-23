import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { container } from "tsyringe";
import { IPrismaUserRepository } from "@modules/Users/Repositories/ORM/IPrismaUserRepository";
import { IAttendanceRepository } from "../../modules/Attendance/repositories/IAttendanceRepository";
import { PrismaAttendanceRepository } from "../../modules/Attendance/repositories/ORM/PrismaAttendanceRepository";
import { IEnrollmentRepository } from "@modules/Enrollment/repositories/IEnrollmentRepository";
import { PrismaEnrollmentRepository } from "@modules/Enrollment/repositories/orm/PrismaEnrollmentRepository";
import {PrismaClassMaterialRepository} from "../../modules/ClassMaterial/repositories/ORM/PrismaClassMaterialRepository"
import {IClassMaterialRepository} from "../../modules/ClassMaterial/repositories/IClassMaterialRepository"

container.registerSingleton<IUserRepository>(
  'UserRepository',
  IPrismaUserRepository,
);

container.registerSingleton<IEnrollmentRepository>(
  'EnrollmentRepository',
  PrismaEnrollmentRepository,
);

container.registerSingleton<IAttendanceRepository>(
  'IAttendanceRepository',
  PrismaAttendanceRepository,
);


container.registerSingleton<IClassMaterialRepository>(
  "ClassMaterialRepository",
  PrismaClassMaterialRepository
);