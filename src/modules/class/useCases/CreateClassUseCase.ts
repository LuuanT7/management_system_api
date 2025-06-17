import { IClassRepository } from "../repositories/IClassRepository";
import { IClassDTO } from "../dtos/IClassDTO";
import { prisma } from "../../../shared/infra/prisma/client";


// Função de validação fora da classe
function isValidTimeForShift(shift: 'MORNING' | 'AFTERNOON', startTime: string, endTime: string): boolean {
  const parse = (time: string) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };

  const start = parse(startTime);
  const end = parse(endTime);

  if (start >= end) return false;

  if (shift === 'MORNING') {
    return start >= 420 && end <= 719; // 07:00 to 11:59
  }

  if (shift === 'AFTERNOON') {
    return start >= 720 && end <= 1079; // 12:00 to 17:59
  }

  return false;
}

export class CreateClassUseCase {
  constructor(private classRepository: IClassRepository) { }

  async create(data: IClassDTO): Promise<IClassDTO> {
    const created = await prisma.class.create({
      data: {
        name: data.name,
        subject: data.subject,
        shift: data.shift,
        startTime: data.startTime,
        endTime: data.endTime,
        teacherId: data.teacherId,
      },
    });

    return {
      id: created.id,
      name: created.name,
      subject: created.subject,
      shift: created.shift,
      startTime: created.startTime,
      endTime: created.endTime,
      teacherId: created.teacherId,
      createdAt: created.createdAt,
    };
  }

}
