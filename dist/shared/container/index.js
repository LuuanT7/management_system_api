"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const IPrismaUserRepository_1 = require("@modules/Users/Repositories/ORM/IPrismaUserRepository");
const PrismaEnrollmentRepository_1 = require("@modules/Enrollment/repositories/orm/PrismaEnrollmentRepository");
tsyringe_1.container.registerSingleton('UserRepository', IPrismaUserRepository_1.IPrismaUserRepository);
tsyringe_1.container.registerSingleton('EnrollmentRepository', PrismaEnrollmentRepository_1.PrismaEnrollmentRepository);
