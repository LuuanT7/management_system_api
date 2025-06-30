export interface IGradeDTO {
  gradeReportId: string;
  activityId: string;
  value: number;
  weight?: number;
  comments?: string;
}