import { IAttendanceRepository } from "../repositories/IAttendanceRepository";

interface IRequest {
  studentId: string;
  classId: string;
}

export class FindByStudentAndClassUsecase {
  constructor(private attendanceRepository: IAttendanceRepository) {}

  async execute({ studentId, classId }: IRequest) {
    if (!studentId || !classId) {
      throw new Error("studentId e classId são obrigatórios");
    }

    const attendance = await this.attendanceRepository.findByStudentAndClass(studentId, classId);

    if (!attendance) {
      throw new Error("Presença não encontrada para esse aluno e turma");
    }

    return attendance;
  }
}
