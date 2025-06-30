import { Router } from 'express';
import { AuthController } from '@modules/auth/infra/http/controllers/AuthController';
import { GenerateResetTokenController } from '../controllers/GenerateResetTokenController';
import { ResetPasswordController } from '../controllers/ResetPasswordController';
import { LogoutController } from '../controllers/LogoutController';
import { authenticate } from '@shared/infra/http/middleware/authenticate';

const authRoutes = Router();
const authController = new AuthController();
const generateResetTokenController = new GenerateResetTokenController();
const resetPasswordController = new ResetPasswordController();
const logoutController = new LogoutController();

authRoutes.post('/sessions', authController.authenticate);
authRoutes.post('/logout', authenticate, logoutController.handle);
authRoutes.post('/generate-token', generateResetTokenController.handle);
authRoutes.post('/reset-password', resetPasswordController.handle);

export { authRoutes }; 