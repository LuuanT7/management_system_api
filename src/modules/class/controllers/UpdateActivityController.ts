import { Request, Response } from "express";
import { UpdateActivityUseCase } from "../../class/useCases/createActivity/updateActivity/UpdateActivityUseCase";
import { UpdateActivityDTO } from "../../class/UpdateActivityDTO"; // Importe o DTO

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

    // Convertendo os dados para o DTO
    const data: UpdateActivityDTO = {
      id,
      ...(title && { title }),
      ...(description && { description }),
      ...(dueDate && { dueDate: new Date(dueDate) }),
      ...(maxScore && { maxScore: Number(maxScore) }),
      ...(type && { type }),
      ...(weight && { weight: Number(weight) })
    };

    try {
      const updatedActivity = await updateActivityUseCase.execute(data);
      return res.status(200).json(updatedActivity);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
}