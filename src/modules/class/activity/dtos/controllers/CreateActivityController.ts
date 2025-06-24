import { Request, Response, NextFunction, RequestHandler } from "express";
import { CreateActivityUseCase } from "../../../useCases/createActivity/CreateActivityUseCase";

export class CreateActivityController {
  constructor(private createActivityUseCase: CreateActivityUseCase) {}

  // Definindo handle como RequestHandler para tipagem correta
  handle: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const {
      title,
      description,
      dueDate,
      maxScore,
      type,
      weight,
      teacherId,
      classId,
    } = req.body;

    const activity = await this.createActivityUseCase.execute({
      title,
      description,
      dueDate,
      maxScore,
      type,
      weight,
      teacherId,
      classId,
    });

    res.status(201).json(activity); // Apenas envie a resposta, não retorne
  } catch (error) {
    res.status(400).json({ message: (error as Error).message }); 
  }
};}
