import { Class } from '@prisma/client'
import { IClassDTO } from '../dtos/IClassDTO';
import { IListClassesDTO } from '../dtos/IListClassesDTO';

interface IClassRepository {
  create(data: IClassDTO): Promise<Class>; 
  listClasses(filters: IListClassesDTO): Promise<Class[]>;
}
export { IClassRepository };
