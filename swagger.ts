const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })

const doc = {
    info: {
        title: 'Sistema de Gestão API',
        description: 'API do Sistema de Gestão',
        version: '1.0.0',
        contact: {
            email: 'contato@sistema.com'
        }
    },
    host: 'localhost:8080',
    basePath: '/v1',
    schemes: ['http'],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
        }
    }
};

const outputFile = './src/shared/documents/swagger.json'
const endpointsFiles = ['./src/shared/infra/http/routes.ts']

swaggerAutogen(outputFile, endpointsFiles, doc); 