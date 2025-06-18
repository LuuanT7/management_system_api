import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAttendanceUseCase } from "../../../userCases/UpdateAttendanceUsecase";

export const updateAttendanceController = async (req: Request, res: Response) => {
    try {
        const usecase = container.resolve(UpdateAttendanceUseCase);
        const updated = await usecase.execute(req.params.id, req.body);
        return res.json(updated);
    } catch (err: any) {
        return res.status(err.statusCode || 400).json({ error: err.message });
    }
};
