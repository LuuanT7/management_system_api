import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdAttendanceUseCase } from "../../../UseCases/FindByStudentAndClassUsecase";

export class FindAttendanceByStudentAndClassController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { studentId, classId } = req.params;

    const useCase = container.resolve(FindByIdAttendanceUseCase);
    const result = await useCase.execute(studentId, classId);

    return res.status(200).json(result);
  }
}



