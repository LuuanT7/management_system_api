import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAttendanceByIdUseCase } from "../../../UseCases/FindAttendanceByIdUseCases";

export const findAttendanceByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const useCase = container.resolve(FindAttendanceByIdUseCase);
    const attendance = await useCase.execute(id);
    return res.json(attendance);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
