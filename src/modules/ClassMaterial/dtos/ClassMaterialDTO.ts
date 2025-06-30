export interface ICreateClassMaterialDTO {
  title: string;
  description?: string;
  fileUrl?: string;
  classId: string;
  isPublished?: boolean;
}

export interface IClassMaterialForStudentDTO {
  id: string;
  title: string;
  description: string | null;
  fileUrl: string | null;
  createdAt: Date;
}