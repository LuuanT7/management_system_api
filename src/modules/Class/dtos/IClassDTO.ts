export interface IClassDTO {
  id: string;
  name: string;
  subject: string;
  shift: 'MORNING' | 'AFTERNOON';
  teacherId: string;
  startTime: string;
  endTime: string;
  createdAt: Date;
}
