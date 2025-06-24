import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAttendancesByPeriodUseCase } from "../../../UseCases/FindAttendancesByPeriodUseCase";

export const findAttendancesByPeriodController = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: "Start date and end date are required." });
    }

    const usecase = container.resolve(FindAttendancesByPeriodUseCase);
    const attendances = await usecase.execute(new Date(startDate as string), new Date(endDate as string));

    return res.json(attendances);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
