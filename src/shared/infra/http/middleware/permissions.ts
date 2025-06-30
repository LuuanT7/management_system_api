import { prisma } from '@shared/infra/database/prisma';
import { NextFunction, Request, Response } from 'express';

const permission = (allowedRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // 1. Verifica se o usuário está autenticado e tem uma role
      if (!req.user || !req.user.role) {
        res.status(401).send({
          success: false,
          message: 'Acesso não autorizado: usuário não autenticado',
        });
        return;
      }

      if (req.user.role === "GUARDIAN" || req.user.role === "STUDENT") {
        const guardian = await prisma.guardian.findFirst({
          where: { userId: req.user.id },
          include: {
            Enrollment: {
              where: {
                active: true
              }
            }
          }
        });

        if (guardian && guardian.Enrollment.length === 0) {
          res.status(403).send({
            success: false,
            message: `Acesso negado: Não há matriculas ativas! Ative-a para ter acesso`,
          });
          return;
        }
      }

      if (req.user.role === "STUDENT") {
        const student = await prisma.student.findUnique({
          where: { userId: req.user.id },
          include: {
            Enrollments: {
              where: { active: true }
            }
          }
        });

        if (!student || student.Enrollments.length === 0) {
          res.status(403).send({
            success: false,
            message: 'Acesso negado: Estudante não encontrado ou sem matrículas ativas',
          });
          return;
        }
      }

      // 2. Verifica se a role do usuário está entre as permitidas
      if (allowedRoles.includes(req.user.role)) {
        next(); // Acesso permitido
        return;
      }

      // Se chegou aqui, não tem permissão
      res.status(403).send({
        success: false,
        message: `Acesso negado: a role ${req.user.role} não tem permissão para esta ação`,
      });

    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        message: 'Erro interno do servidor',
      });
    }
  };
};

export default permission;