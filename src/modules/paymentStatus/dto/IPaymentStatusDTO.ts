export interface IPaymentStatusDTO {
  id: string;
  classId: string;
  guardianId: string;
  paymentStatus: 'PENDING' | 'PAID' | 'OVERDUE';
  enrolledAt: Date;
  paymentId?: string;
  active: boolean;
  studentRA: number;
}
