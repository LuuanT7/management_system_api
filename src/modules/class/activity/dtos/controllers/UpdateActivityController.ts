import { Request, Response } from "express";
import { UpdateActivityUseCase } from "../useCases/createActivity/updateActivity/UpdateActivityUseCase";
import { UpdateActivityDTO } from "../../../../class/UpdateActivityDTO";
export class UpdateActivityController {
  constructor(private updateActivityUseCase: UpdateActivityUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description, dueDate, maxScore, type, weight } = req.body;

    try {
      const data: UpdateActivityDTO = {
        id,
        title,
        description,
        dueDate: new Date(dueDate),
        maxScore,
        type,
        weight,
      };

      const updatedActivity = await this.updateActivityUseCase.execute(data);
      return res.status(200).json(updatedActivity);
    } catch (error) {
      return res.status(400).json({ message: (error as Error).message });
    }
  }
}