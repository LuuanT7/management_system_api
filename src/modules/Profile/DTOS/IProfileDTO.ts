import { IStudentDTO } from '@modules/Users/Student/DTOS/IStudentDTO';
import { IUserAddressDTO } from '@modules/Users/UserAddress/DTOS/IUserAddressDTO';
import { IUserDTO } from '@modules/Users/DTOS/IUserDTO';

export interface IProfileStudentDTO {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone?: string | null;
  birthDate: Date;
  student?: IStudentDTO | null; // Perfil do estudante (se existir)
  UserAddress?: IUserAddressDTO[]; // Array de endereços
  guardian?: {
    user: IUserDTO;
  }[];
}

// export interface IProfileTeacherDTO {
//   id: string;
//   name: string;
//   email: string;
//   cpf: string;
//   phone?: string | null;
//   birthDate: Date;
//   teacher?: ITeacherDTO | null;
// }

// export interface IProfileGuardianDTO {
//   id: string;
//   name: string;
//   email: string;
//   cpf: string;
//   phone?: string | null;
//   birthDate: Date;
// }
