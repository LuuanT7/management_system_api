export interface IGradeAverageDTO {
  gradeReportId: string;
  activityId: string;
  value: number;
  weight?: number;
  comments?: string;
}