import { container } from 'tsyringe';
import 'reflect-metadata';
import { IClassRepository } from '../../modules/class/repositories/IClassRepository';
import { PrismaClassRepository } from '../../../src/modules/class/repositories/implementations/PrismaClassRepository';
container.registerSingleton<IClassRepository>(
  'ClassRepository',
  PrismaClassRepository
);
