import { Request, Response } from 'express';

export class ClassController {
  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    // Simulação de lógica de criação
    const newClass = { id: Date.now(), name, description };

    return res.status(201).json({ message: 'Classe criada', class: newClass });
  }
}
