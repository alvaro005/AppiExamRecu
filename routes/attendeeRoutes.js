const express = require('express');
const attendeeController = require('../controllers/attendeeController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Attendee:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - eventId
 *         - roleId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del asistente
 *         name:
 *           type: string
 *           description: Nombre del asistente
 *         email:
 *           type: string
 *           description: Correo electrónico del asistente
 *         eventId:
 *           type: integer
 *           description: ID del evento al que asiste
 *         roleId:
 *           type: integer
 *           description: ID del rol asignado al asistente
 */

/**
 * @swagger
 * /attendees:
 *   post:
 *     summary: Crea un nuevo asistente
 *     tags: [Attendee]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Attendee'
 *     responses:
 *       201:
 *         description: Asistente creado exitosamente
 *       500:
 *         description: Error en la creación del asistente
 */
router.post('/attendees', attendeeController.createAttendee);

/**
 * @swagger
 * /attendees:
 *   get:
 *     summary: Obtiene todos los asistentes
 *     tags: [Attendee]
 *     responses:
 *       200:
 *         description: Lista de asistentes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attendee'
 *       500:
 *         description: Error al obtener asistentes
 */
router.get('/attendees', attendeeController.getAllAttendees);

/**
 * @swagger
 * /attendees/{id}:
 *   get:
 *     summary: Obtiene un asistente por ID
 *     tags: [Attendee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del asistente
 *     responses:
 *       200:
 *         description: Asistente obtenido exitosamente
 *       404:
 *         description: Asistente no encontrado
 *       500:
 *         description: Error al obtener el asistente
 */
router.get('/attendees/:id', attendeeController.getAttendeeById);

/**
 * @swagger
 * /attendees/{id}:
 *   put:
 *     summary: Actualiza un asistente por ID
 *     tags: [Attendee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del asistente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Attendee'
 *     responses:
 *       200:
 *         description: Asistente actualizado exitosamente
 *       404:
 *         description: Asistente no encontrado
 *       500:
 *         description: Error al actualizar el asistente
 */
router.put('/attendees/:id', attendeeController.updateAttendee);

/**
 * @swagger
 * /attendees/{id}:
 *   delete:
 *     summary: Elimina un asistente por ID
 *     tags: [Attendee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del asistente
 *     responses:
 *       204:
 *         description: Asistente eliminado exitosamente
 *       404:
 *         description: Asistente no encontrado
 *       500:
 *         description: Error al eliminar el asistente
 */
router.delete('/attendees/:id', attendeeController.deleteAttendee);

module.exports = router;