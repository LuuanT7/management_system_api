import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdAttendanceUseCase } from "../../../userCases/FindClassesByTeacherUseCase";

export const findClassesByTeacherController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const useCase = container.resolve(FindByIdAttendanceUseCase);
    const classes = await useCase.execute(id);
    return res.status(200).json(classes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar as turmas do professor." });
  }
};
