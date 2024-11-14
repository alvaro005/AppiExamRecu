const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const eventRoutes = require('./routes/eventRoutes');
const attendeeRoutes = require('./routes/attendeeRoutes');
const eventTypeRoutes = require('./routes/eventTypeRoutes');
const roleRoutes = require('./routes/roleRoutes');

const app = express();

// Habilitar CORS para que cualquier origen pueda hacer peticiones
app.use(cors());

app.use(express.json());
app.use('/api', eventRoutes);
app.use('/api', attendeeRoutes);
app.use('/api', eventTypeRoutes);
app.use('/api', roleRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`Documentación de API en http://localhost:${PORT}/api-docs`);
});
