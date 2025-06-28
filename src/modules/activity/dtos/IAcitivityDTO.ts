export interface CreateActivityDTO {
  title: string;
  description?: string;
  dueDate: string | Date;
  maxScore: number;
  weight?: number; // peso opcional, mas você pode forçar default no useCase
  type: "HOMEWORK" | "TEST" | "PROJECT" | "QUIZ" | "EXAM";
  teacherId: string;
  classId: string;
}
