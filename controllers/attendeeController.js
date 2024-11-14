// controllers/attendeeController.js
const { Attendee, Event, Role } = require('../models');

module.exports = {
  // Crear un nuevo asistente
  async createAttendee(req, res) {
    try {
      const { name, email, eventId, roleId } = req.body; // Aceptar roleId en lugar de role
      const attendee = await Attendee.create({ name, email, eventId, roleId });
      return res.status(201).json(attendee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al crear el asistente', error });
    }
  },

  // Obtener todos los asistentes
  async getAllAttendees(req, res) {
    try {
      const attendees = await Attendee.findAll({
        include: [
          { model: Event, attributes: ['title', 'date'] },
          { model: Role, attributes: ['name', 'description'] } // Incluir detalles de Role
        ]
      });
      return res.status(200).json(attendees);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener asistentes', error });
    }
  },

  // Obtener un asistente por ID
  async getAttendeeById(req, res) {
    try {
      const { id } = req.params;
      const attendee = await Attendee.findByPk(id, {
        include: [
          { model: Event, attributes: ['title', 'date'] },
          { model: Role, attributes: ['name', 'description'] } // Incluir detalles de Role
        ]
      });
      if (!attendee) {
        return res.status(404).json({ message: 'Asistente no encontrado' });
      }
      return res.status(200).json(attendee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener el asistente', error });
    }
  },

  // Actualizar un asistente por ID
  async updateAttendee(req, res) {
    try {
      const { id } = req.params;
      const { name, email, eventId, roleId } = req.body; // Aceptar roleId en lugar de role
      const attendee = await Attendee.findByPk(id);
      if (!attendee) {
        return res.status(404).json({ message: 'Asistente no encontrado' });
      }
      await attendee.update({ name, email, eventId, roleId });
      return res.status(200).json(attendee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al actualizar el asistente', error });
    }
  },

  // Eliminar un asistente por ID
  async deleteAttendee(req, res) {
    try {
      const { id } = req.params;
      const attendee = await Attendee.findByPk(id);
      if (!attendee) {
        return res.status(404).json({ message: 'Asistente no encontrado' });
      }
      await attendee.destroy();
      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al eliminar el asistente', error });
    }
  }
};
