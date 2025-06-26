import { Router } from 'express';
import { authRoutes } from '@modules/auth/infra/http/routes/auth.routes';
import { userRoutes } from '@modules/Users/Infra/Http/Routes/user.routes';
import { profileRoutes } from '@modules/Profile/infra/http/routes/profile.routes';
import { attendanceRoutes } from '@modules/Attendance/infra/http/routers/attendance.routes';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/users', userRoutes);
routes.use('/profile', profileRoutes);
routes.use('/attendance', attendanceRoutes);

export { routes };
