// routes/eventRoutes.js
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
 *       204:
 *         description: Evento eliminado exitosamente
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error al eliminar el evento
 */
router.delete('/events/:id', eventController.deleteEvent);

module.exports = router;
