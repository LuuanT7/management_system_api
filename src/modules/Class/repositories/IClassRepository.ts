import { IClassDTO, ICreateClassDTO } from "../DTOS/IClassDTO";

export interface IClassRepository {
    findAll(): Promise<IClassDTO[]>
    findById(id: string): Promise<IClassDTO>
    create(data: ICreateClassDTO): Promise<ICreateClassDTO>
}
