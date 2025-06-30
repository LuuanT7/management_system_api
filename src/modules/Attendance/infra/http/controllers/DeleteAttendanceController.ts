import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAttendenceUseCase } from "../../../UseCases/DeleteAttendanceUsecase";

export class DeleteAttendanceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const useCase = container.resolve(DeleteAttendenceUseCase);
    await useCase.execute(id);

    return res.status(204).send();
  }
}