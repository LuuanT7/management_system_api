export interface IGradeReportDTO {
  id: string;
  classId: string;
  period: string;
  average: number;
  status: string;
  notes?: string;
  studentRA: number;
  createdAt: Date;
  updatedAt: Date;
}
