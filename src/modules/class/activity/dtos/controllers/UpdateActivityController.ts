import { Request, Response } from "express";
import { UpdateActivityUseCase } from "../../dtos/useCases/createActivity/updateActivity/UpdateActivityUseCase";
import { UpdateActivityDTO } from "../../dtos/UpdateActivityDTO";

export class UpdateActivityController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      title,
      description,
      dueDate,
      maxScore,
      type,
      weight,
    } = req.body;

    const updateActivityUseCase = new UpdateActivityUseCase();

    const data: UpdateActivityDTO = {
      id,
      title,
      description,
      dueDate: new Date(dueDate),
      maxScore,
      type,
      weight,
    };

    try {
      const updatedActivity = await updateActivityUseCase.execute(data);
      return res.status(200).json(updatedActivity);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
