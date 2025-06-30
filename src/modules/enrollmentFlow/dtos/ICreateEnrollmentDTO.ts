export interface ICreateEnrollmentDTO {
  student: {
    name: string;
    email: string;
    birthDate: Date;
  };
  guardian: {
    name: string;
    email: string;
    phone: string;
  };
  classId: string;
  initialPaymentStatus: 'PAID' | 'PENDING';
}
