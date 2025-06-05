import { promises } from "dns";
import { ICreateStudentDTO, IStudentDTO, IUpdateStudentDTO } from "../DTOS/IStudentDTO";

export interface IStudentRepository {
    findAll(): Promise<IStudentDTO[]>
    findByUserId(userId: string): Promise<IStudentDTO>
    create(data: ICreateStudentDTO): Promise<ICreateStudentDTO>
    update(data: IUpdateStudentDTO): Promise<IUpdateStudentDTO>
    delete(userId: string): Promise<IStudentDTO>
}