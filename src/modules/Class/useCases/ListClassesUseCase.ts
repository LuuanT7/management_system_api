import { inject, injectable } from 'tsyringe';
import { IClassRepository } from '../repositories/IClassRepository';

interface IRequest {
  teacherId?: string;
  subject?: string;
  shift?: 'MORNING' | 'AFTERNOON';
}

@injectable()
export class ListClassesUseCase {
  constructor(
    @inject('ClassRepository')
    private classRepository: IClassRepository
  ) {}

  async execute(filters: IRequest) {
    const validShifts = ['MORNING', 'AFTERNOON'];
    if (filters.shift && !validShifts.includes(filters.shift)) {
      throw new Error('Invalid shift. Only MORNING and AFTERNOON are allowed.');
    }

    const classes = await this.classRepository.findAll(filters);
    return classes;
  }
}
