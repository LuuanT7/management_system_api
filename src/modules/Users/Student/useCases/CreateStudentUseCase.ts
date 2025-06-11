import { IStudentRepository } from "../Repositories/IStudentRepository";
import { ICreateStudentDTO } from "../DTOS/IStudentDTO";
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { z } from "zod";

const createStudentSchema = z.object({
    userId: z.string({
        required_error: "User ID is required",
        invalid_type_error: "User ID must be a string"
    }).uuid(),
    guardianId: z.string({
        required_error: "Guardian ID is required",
        invalid_type_error: "Guardian ID must be a string"
    }).uuid()
})

@injectable()
export class CreateStudentUseCase {
    constructor(
        @inject("StudentRepository")
        private studentRepository: IStudentRepository
    ) { }

    async execute(data: ICreateStudentDTO): Promise<ICreateStudentDTO> {

        try {
            const { userId, guardianId } = createStudentSchema.parse(data);
            const student = await this.studentRepository.create({ userId, guardianId });
            return student;
        } catch (error) {
            console.log(error);
            throw new AppError("Error creating student (CreateStudentUseCase)", 500);
        }

    }
}       