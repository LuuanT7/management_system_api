
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { z } from "zod";
import { IGuardianRepository } from "../repositories/IGuardianRepository";
import { ICreateGuardianDTO } from "../DTOS/IGuardianDTO";

const createStudentSchema = z.object({
    userId: z.string({
        required_error: "User ID is required",
        invalid_type_error: "User ID must be a string"
    }).uuid(),

})

@injectable()
export class CreateGuardianUseCase {
    constructor(
        @inject("GuardianRepository")
        private guardianRepository: IGuardianRepository
    ) { }

    async execute(data: ICreateGuardianDTO): Promise<ICreateGuardianDTO> {

        try {
            const { userId } = createStudentSchema.parse(data);
            const guardian = await this.guardianRepository.create({ userId });
            return guardian;
        } catch (error) {
            console.log(error);
            throw new AppError("Error creating guardian (CreateGuardianUseCase)", 500);
        }

    }
}       