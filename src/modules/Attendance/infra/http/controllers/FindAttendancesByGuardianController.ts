import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAttendancesByGuardianUseCase } from "../../../UseCases/FindAttendancesByGuardianUseCase";

export class FindAttendancesByGuardianController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { guardianId } = req.params;

    const useCase = container.resolve(FindAttendancesByGuardianUseCase);
    const result = await useCase.execute(guardianId);

    return res.status(200).json(result);
  }
}
