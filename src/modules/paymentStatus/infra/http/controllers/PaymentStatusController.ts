import { Request, Response } from 'express';
import { ListPaymentStatusesUseCase } from '../../../useCases/ListPaymentStatusUseCase';

export class PaymentStatusController {
  constructor(private listPaymentStatusUseCase: ListPaymentStatusesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { studentId } = req.params;  // ou req.query.studentId se preferir

      if (!studentId) {
        return res.status(400).json({ message: 'studentId is required.' });
      }

      const paymentStatuses = await this.listPaymentStatusUseCase.execute(studentId);
      return res.status(200).json(paymentStatuses);
    } catch (error) {
      console.error('PaymentStatusController Error:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  }
}
