import { Router } from 'express';
import { PaymentStatusController } from '../controllers/PaymentStatusController';
import { ListPaymentStatusesUseCase } from '../../../useCases/ListPaymentStatusUseCase';
import { PaymentStatusRepository } from '../../../repositories/PaymentStatusRepository';

const paymentStatusRoutes = Router();

const paymentStatusRepository = new PaymentStatusRepository();
const listPaymentStatusUseCase = new ListPaymentStatusesUseCase(paymentStatusRepository);
const paymentStatusController = new PaymentStatusController(listPaymentStatusUseCase);

paymentStatusRoutes.get('payment-status/:studentId', (req, res) => paymentStatusController.handle(req, res));

export { paymentStatusRoutes };
