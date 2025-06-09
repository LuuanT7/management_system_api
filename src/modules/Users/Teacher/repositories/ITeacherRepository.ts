import { ICreateTeacherDTO, ITeacherResponseDTO } from "../DTOS/ITeacherDTO";

export interface ITeacherRepository {
    create(data: ICreateTeacherDTO): Promise<ITeacherResponseDTO>;

} 