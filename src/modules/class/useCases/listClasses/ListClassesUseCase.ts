import { inject, injectable } from 'tsyringe';
import { IClassRepository } from '../../repositories/IClassRepository';
import { IListClassesDTO } from '../../dtos/IListClassesDTO';
import { Class } from '@prisma/client';

@injectable()
class ListClassesUseCase {
  constructor(
    @inject('ClassRepository')
    private classRepository: IClassRepository,
  ) {}

  async execute(filters: IListClassesDTO): Promise<Class[]> {
    return this.classRepository.listClasses(filters);
  }
}

export { ListClassesUseCase };