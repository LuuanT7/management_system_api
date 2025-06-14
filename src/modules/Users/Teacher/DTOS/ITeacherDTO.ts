export interface ICreateTeacherDTO {
    userId: string;
}

export interface ITeacherResponseDTO {
    id: string;
    userId: string;
    created_at: Date;
    updated_at: Date;
} 
export interface ITeacherProfileDTO {
    id: string;
    name: string;
    email: string;
    role: 'ADMIN' | 'GUARDIAN' | 'STUDENT' | 'TEACHER'
    cpf?: string;
    rg?: string;   
    userAddress?: {};
    myStudents?: [];
    myClasses?: [];
  }