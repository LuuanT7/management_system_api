import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdAttendanceUseCase } from "../../../UseCases/FindByStudentAndClassUsecase";

export const findAttendanceByStudentAndClassController = async (req: Request, res: Response) => {
    try {
        const { studentId, classId } = req.params;
        const usecase = container.resolve(FindByIdAttendanceUseCase);
        const result = await usecase.execute(studentId, classId);
        return res.json(result);
    } catch (err: any) {
        return res.status(err.statusCode || 400).json({ error: err.message });
    }
};
