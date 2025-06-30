import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateGradeUseCase } from "../../../useCases/UpdateGradeUseCase";

export class UpdateGradeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { gradeReportId, activityId, value, weight, comments } = req.body;

    const useCase = container.resolve(UpdateGradeUseCase);

    await useCase.execute(id, {
      gradeReportId,
      activityId,
      value,
      weight,
      comments,
    });

    return res.status(204).send();
  }
}
