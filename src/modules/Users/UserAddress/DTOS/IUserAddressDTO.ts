export interface IUserAddressDTO {
    id: string;
    userId: string;
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface ICreateUserAddressDTO {
    userId: string;
    address: string;
    number: string;
    complement?: string;
    neighborhood?: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface IUpdateUserAddressDTO {
    id: string;
    address?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    zipCode?: string;
}
