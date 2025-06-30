import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAttendanceByClassUseCase } from "../../../UseCases/FindAttendanceByClassUseCases";

export class FindAttendanceByClassController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { classId } = req.params;

    const useCase = container.resolve(FindAttendanceByClassUseCase);
    const result = await useCase.execute(classId);

    return res.status(200).json(result);
  }
}

