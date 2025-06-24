import { Request, Response } from "express";
import { ListActivitiesUseCase } from "../../class/useCases/createActivity/listActivity/ListActivitiesUseCase";

export class ListActivitiesController {
  constructor(private listActivitiesUseCase: ListActivitiesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const activities = await this.listActivitiesUseCase.execute();
      return res.status(200).json(activities);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error." });
    }
  }
}
