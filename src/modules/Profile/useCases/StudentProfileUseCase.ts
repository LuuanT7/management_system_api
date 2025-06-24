import { IStudentProfileDTO } from '../DTOS/IProfileDTO';
import { IProfileRepository } from '../repositories/IProfileRepository';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { z } from 'zod';

const profileSchema = z.object({
  userId: z.string({
    required_error: 'User ID is required',
    invalid_type_error: 'User ID must be a string',
  }),
});

@injectable()
export class ProfileStudentUseCase {
  constructor(
    @inject('ProfileRepository')
    private profileRepository: IProfileRepository,
  ) {}

  async execute(userId: string): Promise<IStudentProfileDTO> {
    try {
      const { userId: userIdParsed } = profileSchema.parse({ userId });

      const profile = await this.profileRepository.profileStudent(userIdParsed);
      return profile;
    } catch (error) {
      console.error('ERROR', error);
      throw new AppError(error.message, error.statusCode);
    }
  }
}
