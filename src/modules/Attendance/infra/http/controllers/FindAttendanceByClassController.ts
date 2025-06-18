import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAttendanceByClassUseCase } from "../../../userCases/FindAttendanceByClassUseCases";

export const findAttendanceByClassController = async (req: Request, res: Response) => {
    try {
        const { classId } = req.params;
        const useCase = container.resolve(FindAttendanceByClassUseCase);
        const result = await useCase.execute(classId);
        return res.json(result);
    } catch (err: any) {
        return res.status(err.statusCode || 400).json({ error: err.message });
    }
};
