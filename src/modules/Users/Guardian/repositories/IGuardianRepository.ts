import { ICreateGuardianDTO, IUpdateGuardianDTO } from "../DTOS/IGuardianDTO";

export interface IGuardianRepository {
    create(data: ICreateGuardianDTO): Promise<ICreateGuardianDTO>
}