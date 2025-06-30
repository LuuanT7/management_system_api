import { container } from 'tsyringe';
import { IAttendanceRepository } from '../../modules/Attendance/repositories/IAttendanceRepository';
import { PrismaAttendanceRepository } from '../../modules/Attendance/repositories/ORM/PrismaAttendanceRepository';
import { IEnrollmentRepository } from '@modules/Enrollment/repositories/IEnrollmentRepository';
import { PrismaEnrollmentRepository } from '@modules/Enrollment/repositories/orm/PrismaEnrollmentRepository';
import { IPrismaUserRepository } from '@modules/Users/Repositories/ORM/IPrismaUserRepository';
import { IStudentRepository } from '@modules/Users/Student/Repositories/IStudentRepository';
import { PrismaStudentRepository } from '@modules/Users/Student/Repositories/orm/PrismaStudentRepository';
import { IGuardianRepository } from '@modules/Users/Guardian/repositories/IGuardianRepository';
import { PrismaGuardianRepository } from '@modules/Users/Guardian/repositories/orm/PrismaStudentRepository';
import { IUserRepository } from '@modules/Users/Repositories/IUserRepository';
import { PrismaProfileRepository } from '@modules/Profile/repositories/orm/IPrismaProfileRepository';
import { IProfileRepository } from '@modules/Profile/repositories/IProfileRepository';
import { IClassMaterialRepository } from '@modules/ClassMaterial/repositories/IClassMaterialRepository';
import { PrismaClassMaterialRepository } from '@modules/ClassMaterial/repositories/ORM/PrismaClassMaterialRepository';
import { IGradeRepository } from "../../modules/Average/repositories/IGradeAverageRepository";
import { PrismaGradeRepository } from "../../modules/Average/repositories/ORM/PrismaGradeRepository";


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
  'ClassMaterialRepository',
  PrismaClassMaterialRepository,
);

container.registerSingleton<IGradeRepository>(
  "GradeRepository",
  PrismaGradeRepository
);

container.registerSingleton<IStudentRepository>(
  'StudentRepository',
  PrismaStudentRepository,
);
container.registerSingleton<IGuardianRepository>(
  'GuardianRepository',
  PrismaGuardianRepository,
);
container.registerSingleton<IProfileRepository>(
  'ProfileRepository',
  PrismaProfileRepository,
);

