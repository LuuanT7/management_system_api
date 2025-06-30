import { IProfileRepository } from '../repositories/IProfileRepository';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { z } from 'zod';
import { IProfileGuardianDTO } from '../DTOS/IProfileDTO';

const profileSchema = z.object({
  userId: z.string({
    required_error: 'User ID is required',
    invalid_type_error: 'User ID must be a string',
  }),
});

@injectable()
export class GuardianProfileUseCase {
  constructor(
    @inject('ProfileRepository')
    private profileRepository: IProfileRepository,
  ) {}

  async execute(id: string): Promise<IProfileGuardianDTO> {
    try {
      const { userId } = profileSchema.parse({ userId: id });

      const profile = await this.profileRepository.profileGuardian(userId);
      return profile;
    } catch (error) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}
