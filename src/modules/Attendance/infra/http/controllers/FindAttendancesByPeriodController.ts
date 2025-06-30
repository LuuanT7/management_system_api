import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAttendancesByPeriodUseCase } from "../../../UseCases/FindAttendancesByPeriodUseCase";
export class FindAttendancesByPeriodController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { startDate, endDate } = req.query;
    const useCase = container.resolve(FindAttendancesByPeriodUseCase);

    const result = await useCase.execute(
      new Date(startDate as string),
      new Date(endDate as string)
    );

    return res.status(200).json(result);
  }
}
