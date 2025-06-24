import 'reflect-metadata';
import { container } from 'tsyringe';
import { IClassRepository } from '../../../src/modules/class/repositories/IClassRepository';
import { PrismaClassRepository } from '../../../src/modules/class/repositories/implementations/PrismaClassRepository';

// Registrando o repositório no container do tsyringe com tipagem
container.registerSingleton<IClassRepository>(
  'ClassRepository',
  PrismaClassRepository
);