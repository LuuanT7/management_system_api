import { Request, Response } from "express";
import { DeleteActivityUseCase } from "../../../activity/dtos/useCases/createActivity/deleteActivity/DeleteActivityUseCase";

export class DeleteActivityController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteActivityUseCase = new DeleteActivityUseCase();

    try {
      await deleteActivityUseCase.execute(id);
      return res.status(204).send(); // No content
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
