const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - title
 *         - date
 *         - hour
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del evento
 *         title:
 *           type: string
 *           description: Título del evento
 *         description:
 *           type: string
 *           description: Descripción del evento
 *         date:
 *           type: string
 *           format: date
 *           description: Fecha del evento
 *         hour:
 *           type: string
 *           format: time
 *           description: Hora del evento (formato HH:mm:ss)
 *         eventTypeId:
 *           type: integer
 *           description: ID del tipo de evento
 */

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Crea un nuevo evento
 *     tags: [Event]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       201:
 *         description: Evento creado exitosamente
 *       500:
 *         description: Error en la creación del evento
 */
router.post('/events', eventController.createEvent);

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Obtiene todos los eventos
 *     tags: [Event]
 *     responses:
 *       200:
 *         description: Lista de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       500:
 *         description: Error al obtener eventos
 */
router.get('/events', eventController.getAllEvents);

/**
 * @swagger
 * /events/{eventId}/attendees:
 *   get:
 *     summary: Obtener todos los asistentes de un evento
 *     description: Devuelve una lista de asistentes para un evento especificado por su ID.
 *     parameters:
 *       - name: eventId
 *         in: path
 *         required: true
 *         description: ID del evento para obtener los asistentes.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de asistentes obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "Juan Pérez"
 *                   email:
 *                     type: string
 *                     example: "juan.perez@example.com"
 *                   Event:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: "Conferencia de Tecnología"
 *                       hour:
 *                         type: string
 *                         example: "14:00:00"
 *                   Role:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: "Participante"
 *       404:
 *         description: No se encontraron asistentes para este evento.
 *       500:
 *         description: Error al obtener los asistentes.
 */
router.get('/events/:eventId/attendees', eventController.getAttendeesByEventId);

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Obtiene un evento por ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del evento
 *     responses:
 *       200:
 *         description: Evento obtenido exitosamente
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error al obtener el evento
 */
router.get('/events/:id', eventController.getEventById);

/**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Actualiza un evento por ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del evento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: Evento actualizado exitosamente
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error al actualizar el evento
 */
router.put('/events/:id', eventController.updateEvent);

/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     summary: Elimina un evento por ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del evento
 *     responses:
 *       200:
 *         description: Evento eliminado exitosamente
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error al eliminar el evento
 */
router.delete('/events/:id', eventController.deleteEvent);

module.exports = router;
