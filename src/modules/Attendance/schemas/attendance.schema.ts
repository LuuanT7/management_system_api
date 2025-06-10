import { z } from "zod";

export const attendanceSchema = z.object({
  date: z.coerce.date(),
  studentId: z.string().uuid(),
  classId: z.string().uuid(),
  present: z.boolean(),
});

export type AttendanceSchemaType = z.infer<typeof attendanceSchema>;

