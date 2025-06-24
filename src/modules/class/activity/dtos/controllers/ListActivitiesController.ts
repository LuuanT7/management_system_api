import { RequestHandler } from "express";
import { ListActivitiesUseCase } from "../../../useCases/createActivity/listActivity/ListActivitiesUseCase";
export class ListActivitiesController {
  constructor(private listActivitiesUseCase: ListActivitiesUseCase) {}

  handle: RequestHandler = async (req, res, next): Promise<void> => {
    try {
      const activities = await this.listActivitiesUseCase.execute();
      res.status(200).json(activities); // apenas chamar, sem return
    } catch (error) {
      res.status(400).json({ message: (error as Error).message }); // apenas chamar, sem return
    }
  };
}
