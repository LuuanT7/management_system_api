export interface ITeacherDashboardDTO {
  classId: string;
  className: string;
  subject: string;
  shift: 'MORNING' | 'AFTERNOON' | 'EVENING';
  averageGrade: number; // média das notas das atividades da turma
  averageAttendance: number; // frequência média da turma
  totalStudents: number;
}