import { z } from "zod";

const createAttendanceSchema = z.object({
  studentId: z.string({
    required_error: "ID do estudante é obrigatório",
    invalid_type_error: "ID do estudante deve ser uma string"
  }).uuid("ID do estudante inválido"),

  classId: z.string({
    required_error: "ID da turma é obrigatório",
    invalid_type_error: "ID da turma deve ser uma string"
  }).uuid("ID da turma inválido"),

  date: z.coerce.date({
    required_error: "A data é obrigatória",
    invalid_type_error: "A data deve ser válida"
  }),

  present: z.boolean({
    required_error: "O campo de presença é obrigatório",
    invalid_type_error: "Presença deve ser verdadeiro ou falso"
  })
}).strict();


