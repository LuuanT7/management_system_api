import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGradeUseCase } from "../../../useCases/CreateGradeUseCase";

export class CreateGradeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateGradeUseCase);
    const { gradeReportId, activityId, value, weight, comments } = req.body;
    await useCase.execute({ gradeReportId, activityId, value, weight, comments });
    return res.status(201).send();
  }
}