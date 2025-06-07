import { Request, Response } from "express";
import { CreateAttendanceUseCase } from "../../../userCases/CreateAttendanceUsecases";

export class AttendanceController {
  constructor(private createAttendanceUseCase: CreateAttendanceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { studentId, classId, date, present } = request.body;

    try {
      await this.createAttendanceUseCase.execute({
        studentId,
        classId,
        date: new Date(date),
        present,
      });

      return response.status(201).json({ message: "Attendance recorded successfully." });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
