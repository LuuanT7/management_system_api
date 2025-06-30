import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAttendanceUseCase } from "../../../UseCases/UpdateAttendanceUsecase";

export class UpdateAttendanceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { present } = req.body;

    const useCase = container.resolve(UpdateAttendanceUseCase);

    const result = await useCase.execute(id, {
        present,
        id: "",
        studentId: "",
        classId: "",
        date: undefined
    });

    return res.status(200).json(result);
  }
}

