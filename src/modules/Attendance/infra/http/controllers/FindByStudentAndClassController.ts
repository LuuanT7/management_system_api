import { Request, Response } from "express";
import { PrismaAttendanceRepository } from "../../../repositories/ORM/PrismaAttendanceRepository";
import { FindByStudentAndClassUsecase } from "../../../userCases/FindByStudentAndClassUsecase";

export async function findByStudentAndClassController(req: Request, res: Response) {
  const { studentId, classId } = req.params;

  const prismaAttendanceRepository = new PrismaAttendanceRepository();
  const findByStudentAndClassUsecase = new FindByStudentAndClassUsecase(prismaAttendanceRepository);

  try {
    const result = await findByStudentAndClassUsecase.execute({ studentId, classId });
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
