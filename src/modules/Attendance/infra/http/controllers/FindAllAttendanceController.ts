import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllAttendanceUseCase } from "../../../userCases/FindAllAttendanceUsecase";

export const findAllAttendanceController = async (req: Request, res: Response) => {
    try {
        const usecase = container.resolve(FindAllAttendanceUseCase);
        const attendances = await usecase.execute();
        return res.json(attendances);
    } catch (err: any) {
        return res.status(err.statusCode || 400).json({ error: err.message });
    }
};
