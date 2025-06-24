import { ICreateUserAddressDTO, IUpdateUserAddressDTO, IUserAddressDTO } from "../DTOS/IUserAddressDTO";

export interface IUserAddressRepository {
    create(data: ICreateUserAddressDTO): Promise<IUserAddressDTO>;
    findByUserId(userId: string): Promise<IUserAddressDTO>;
    update(data: IUpdateUserAddressDTO): Promise<IUserAddressDTO>;
    delete(id: string): Promise<void>;
}