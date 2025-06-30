export interface ICreateTeacherDTO {
  userId: string;
}

export interface ITeacherResponseDTO {
  id: string;
  userId: string;
  created_at: Date;
  updated_at: Date;
}
