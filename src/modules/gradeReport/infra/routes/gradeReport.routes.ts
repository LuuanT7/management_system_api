import { Router } from 'express';
import { GradeReportController } from '../controllers/GradeReportController';
import { GradeReportRepository } from '../../repositories/GradeReportRepository';
import { ListClassAveragesUseCase } from '../../useCases/ListClassAveragesUseCase';

const gradeReportRoutes = Router();

// Instanciar as dependências
const gradeReportRepository = new GradeReportRepository();
const listClassAveragesUseCase = new ListClassAveragesUseCase(gradeReportRepository);
const gradeReportController = new GradeReportController(listClassAveragesUseCase);

// Definir rota para listar médias de uma turma
gradeReportRoutes.get('/class/:classId/averages', (req, res) => gradeReportController.handle(req, res));

export { gradeReportRoutes };
