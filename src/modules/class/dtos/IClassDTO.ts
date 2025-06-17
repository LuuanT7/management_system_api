export interface IClassDTO {
  id?: string;
  name: string;
  description?: string;
  createdAt?: Date;
  subject: string; // nome da disciplina/matéria
  shift: 'MORNING' | 'AFTERNOON';  // turno
  startTime: string;
  endTime: string;
  teacherId: string; // id do professor responsável
}
