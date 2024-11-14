// routes/roleRoutes.js
const express = require('express');
const roleController = require('../controllers/roleController');
const router = express.Router();

/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Obtiene todos los roles
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: Lista de roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 *       500:
 *         description: Error al obtener los roles
 */
router.get('/roles', roleController.getAllRoles);

module.exports = router;
