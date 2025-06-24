import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAttendenceUseCase } from "../../../UseCases/DeleteAttendanceUsecase";

export const deleteAttendanceController = async (req: Request, res: Response) => {
    try {
        const usecase = container.resolve(DeleteAttendenceUseCase);
        const result = await usecase.execute(req.params.id);
        return res.json(result);
    } catch (err: any) {
        return res.status(err.statusCode || 400).json({ error: err.message });
    }
};
