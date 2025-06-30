
import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAttendanceByIdUseCase } from "../../../UseCases/FindAttendanceByIdUseCases";

export class FindAttendanceByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const useCase = container.resolve(FindAttendanceByIdUseCase);
    const result = await useCase.execute(id);

    return res.status(200).json(result);
  }
}
