import { NextFunction, Request, Response } from 'express';

const permission = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // 1. Verifica se o usuário está autenticado e tem uma role
    if (!req.user || !req.user.role) {
      return res.status(401).send({
        success: false,
        message: 'Acesso não autorizado: usuário não autenticado',
      });
    }

    // 2. Verifica se a role do usuário está entre as permitidas
    if (allowedRoles.includes(req.user.role)) {
      return next(); // Acesso permitido
    }

    // 3. Se não tiver permissão
    res.status(403).send({
      success: false,
      message: `Acesso negado: a role ${req.user.role} não tem permissão para esta ação`,
    });
  };
};

export default permission;
