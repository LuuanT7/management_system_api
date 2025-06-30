import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAttendanceUseCase } from "../../../UseCases/CreateAttendanceUsecases";

export class CreateAttendanceController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { studentId, classId, date, present } = req.body;

      const usecase = container.resolve(CreateAttendanceUseCase);

      const attendance = await usecase.execute({
        studentId,
        classId,
        date: new Date(date), // garante que seja Date
        present,
      });

      return res.status(201).json(attendance);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}


