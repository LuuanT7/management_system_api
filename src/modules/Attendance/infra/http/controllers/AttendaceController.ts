import { Request, Response } from "express";
import { CreateAttendanceUsecase } from "../../../userCases/CreateAttendanceUsecases";
import { DeleteAttendanceUsecase } from "../../../userCases/DeleteAttendanceUsecase";
import { FindAllAttendanceUsecase } from "../../../userCases/FindAllAttendanceUsecase";
import { UpdateAttendanceUsecase } from "../../../userCases/UpdateAttendanceUsecase";
import { PrismaAttendanceRepository } from "../../../repositories/ORM/PrismaAttendanceRepository";

const repository = new PrismaAttendanceRepository();

export const createAttendanceController = async (req: Request, res: Response) => {
  try {
    const usecase = new CreateAttendanceUsecase(repository);
    const attendance = await usecase.execute(req.body);
    return res.status(201).json(attendance);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const deleteAttendanceController = async (req: Request, res: Response) => {
  try {
    const usecase = new DeleteAttendanceUsecase(repository);
    const result = await usecase.execute(req.params.id);
    return res.json(result);
  } catch (err: any) {
    return res.status(404).json({ error: err.message });
  }
};

export const findAttendanceByIdController = async (req: Request, res: Response) => {
  try {
    const usecase = new FindAllAttendanceUsecase(repository);
    const attendance = await usecase.execute(req.params.id);
    return res.json(attendance);
  } catch (err: any) {
    return res.status(404).json({ error: err.message });
  }
};

export const updateAttendanceController = async (req: Request, res: Response) => {
  try {
    const usecase = new UpdateAttendanceUsecase(repository);
    const updated = await usecase.execute(req.params.id, req.body);
    return res.json(updated);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
    
  }
};
