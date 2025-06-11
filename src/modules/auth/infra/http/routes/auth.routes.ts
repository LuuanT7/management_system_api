import { Router } from 'express';
import { AuthController } from '@modules/auth/infra/http/controllers/AuthController';

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post('/sessions', authController.authenticate);

export { authRoutes }; 