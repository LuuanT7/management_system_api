import { IUserRepository } from "@modules/Users/Repositories/IUserRepository";
import { container } from "tsyringe";
import { IPrismaUserRepository } from "@modules/Users/Repositories/ORM/IPrismaUserRepository";
import { IAttendanceRepository } from "../../modules/Attendance/repositories/IAttendanceRepository";
import { PrismaAttendanceRepository } from "../../modules/Attendance/repositories/ORM/PrismaAttendanceRepository";


container.registerSingleton<IUserRepository>(
  'UserRepository',
  IPrismaUserRepository,
);
