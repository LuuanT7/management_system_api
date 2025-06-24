import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAttendancesByGuardianUseCase } from "../../../UseCases/FindAttendancesByGuardianUseCase";

export const findAttendancesByGuardianController = async (req: Request, res: Response) => {
  try {
    const { guardianId } = req.params;

    const usecase = container.resolve(FindAttendancesByGuardianUseCase);
    const attendances = await usecase.execute(guardianId);

    return res.json(attendances);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
