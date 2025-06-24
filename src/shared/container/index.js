"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
require("reflect-metadata");
const PrismaClassRepository_1 = require("../../../src/modules/class/repositories/implementations/PrismaClassRepository");
tsyringe_1.container.registerSingleton('ClassRepository', PrismaClassRepository_1.PrismaClassRepository);
