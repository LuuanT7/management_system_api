export type PaymentStatus = "PENDING" | "PAID" | "OVERDUE";

export interface IEnrollmentDTO {
    id: string;
    studentId: string;
    classId: string;
    guardianId: string;
    paymentStatus: PaymentStatus;
    enrolledAt: Date;
    paymentId?: string;
    active: boolean;
}

export interface ICreateEnrollmentDTO {
    studentId: string;
    classId: string;
    guardianId: string;
    paymentStatus?: PaymentStatus;
    paymentId?: string;
    active?: boolean;
}

export interface IUpdateEnrollmentDTO {
    id: string;
    paymentStatus?: PaymentStatus;
    paymentId?: string;
    active?: boolean;
} 