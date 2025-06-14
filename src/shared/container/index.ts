import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { container } from "tsyringe";

import { IPrismaUserRepository } from "@modules/Users/Repositories/ORM/IPrismaUserRepository";
import { IAttendanceRepository } from "../../modules/Attendance/repositories/IAttendanceRepository";
import { PrismaAttendanceRepository } from "../../modules/Attendance/repositories/ORM/PrismaAttendanceRepository";
import { IEnrollmentRepository } from "@modules/Enrollment/repositories/IEnrollmentRepository";
import { PrismaEnrollmentRepository } from "@modules/Enrollment/repositories/orm/PrismaEnrollmentRepository";
import { IPrismaUserRepository } from "@modules/Users/Repositories/ORM/IPrismaUserRepository";
import { IStudentRepository } from "@modules/Users/Student/Repositories/IStudentRepository";
import { PrismaStudentRepository } from "@modules/Users/Student/Repositories/orm/PrismaStudentRepository";
import { IGuardianRepository } from "@modules/Users/Guardian/repositories/IGuardianRepository";
import { PrismaGuardianRepository } from "@modules/Users/Guardian/repositories/orm/PrismaStudentRepository";


container.registerSingleton<IUserRepository>(
  'UserRepository',
  IPrismaUserRepository,
);

container.registerSingleton<IEnrollmentRepository>(
  'EnrollmentRepository',
  PrismaEnrollmentRepository,
);

// container.registerSingleton<IClassRepository>(
//   'ClassRepository',
//   PrismaClassRepository,
// );

container.registerSingleton<IStudentRepository>(
  'StudentRepository',
  PrismaStudentRepository,
);
container.registerSingleton<IGuardianRepository>(
  'GuardianRepository',
  PrismaGuardianRepository,
);
