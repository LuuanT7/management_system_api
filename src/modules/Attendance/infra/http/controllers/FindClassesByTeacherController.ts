import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdAttendanceUseCase } from "../../../UseCases/FindClassesByTeacherUseCase";

export class FindClassesByTeacherController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { teacherId } = req.params;

    const useCase = container.resolve(FindByIdAttendanceUseCase);
    const result = await useCase.execute(teacherId);

    return res.status(200).json(result);
  }
}

