
// swaggerConfig.js
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Eventos Corporativos',
    version: '1.0.0',
    description: 'Documentación de API para gestionar eventos, tipos de eventos y asistentes',
  },
  servers: [
    {
      url: 'https://appiexamrecu.onrender.com/api',
      description: 'Servidor de desarrollo',
    },
    {
      url: 'http://localhost:3000/api',
      description: 'Servidor local',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Ruta donde están definidas las rutas con comentarios Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
