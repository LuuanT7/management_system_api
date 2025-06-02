import { IUserRepository } from "@modules/Users/Repositories/IUserRepository";  
import { container } from "tsyringe";
import { IPrismaUserRepository} from "@modules/Users/Repositories/ORM/IPrismaUserRepository";


container.registerSingleton<IUserRepository>(
  'UserRepository',
  IPrismaUserRepository,
);

container.registerSingleton<IUserRepository>(
  'UserRepository',
  IPrismaUserRepository,
);