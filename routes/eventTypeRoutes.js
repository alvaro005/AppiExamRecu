// routes/eventTypeRoutes.js
const express = require('express');
const eventTypeController = require('../controllers/eventTypeController');
const router = express.Router();

/**
 * @swagger
 * /event-types:
 *   get:
 *     summary: Obtiene todos los tipos de eventos
 *     tags: [EventType]
 *     responses:
 *       200:
 *         description: Lista de tipos de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EventType'
 *       500:
 *         description: Error al obtener los tipos de eventos
 */
router.get('/event-types', eventTypeController.getAllEventTypes);

/**
 * @swagger
 * /event-types/{id}:
 *   get:
 *     summary: Obtiene un tipo de evento por ID
 *     tags: [EventType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de evento
 *     responses:
 *       200:
 *         description: Tipo de evento obtenido exitosamente
 *       404:
 *         description: Tipo de evento no encontrado
 *       500:
 *         description: Error al obtener el tipo de evento
 */
router.get('/event-types/:id', eventTypeController.getEventTypeById);

module.exports = router;
