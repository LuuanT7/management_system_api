import { ITeacherRepository } from "../repositories/ITeacherRepository";
import { ICreateTeacherDTO } from "../DTOS/ITeacherDTO";
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { z } from "zod";

const createTeacherSchema = z.object({
    userId: z.string({
        required_error: "User ID is required",
        invalid_type_error: "User ID must be a string"
    }).uuid()
});

@injectable()
export class CreateTeacherUseCase {
    constructor(
        @inject("TeacherRepository")
        private teacherRepository: ITeacherRepository
    ) { }

    async execute({ userId }: ICreateTeacherDTO): Promise<ICreateTeacherDTO> {
        try {
            createTeacherSchema.parse({ userId });
            const teacher = await this.teacherRepository.create({ userId });
            return teacher;
        } catch (error) {
            console.log(error);
            throw new AppError("Error creating teacher (CreateTeacherUseCase)", 500);
        }
    }
} 