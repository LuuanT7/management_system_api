import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllAttendanceUseCase } from "../../../UseCases/FindAllAttendanceUsecase";

export class FindAllAttendanceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(FindAllAttendanceUseCase);
    const result = await useCase.execute();
    return res.status(200).json(result);
  }
}
