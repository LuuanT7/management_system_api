"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermission = checkPermission;
// Configuração direta das permissões
const permissions = {
    ADMIN: {
        'v1/users': ['GET', 'POST', 'PUT', 'DELETE'],
    },
    TEACHER: {
        'v1/users': ['GET'],
    },
    GUARDIAN: {
        'v1/users/:id': ['GET'],
    },
    STUDENT: {
        'v1/users/:id': ['GET'],
    }
};
function checkPermission(req, res, next) {
    const user = req.user; // Assume que o usuário está autenticado
    const { path, method } = req;
    if (!user || !user.role) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    const rolePermissions = permissions[user.role];
    if (!rolePermissions) {
        return res.status(403).json({ error: 'Role não encontrada' });
    }
    // Encontra a rota mais específica que corresponde
    const matchingRoute = Object.keys(rolePermissions)
        .filter(route => path.startsWith(route))
        .sort((a, b) => b.length - a.length)[0];
    if (!matchingRoute) {
        return res.status(403).json({ error: 'Rota não permitida' });
    }
    // Verifica se o método é permitido
    if (!rolePermissions[matchingRoute].includes(method)) {
        return res.status(403).json({ error: 'Método não permitido' });
    }
    next();
}
