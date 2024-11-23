const { Attendee, Event, Role } = require('../models');

module.exports = {
  // Crear un nuevo asistente
  async createAttendee(req, res) {
    try {
      const { name, email, eventId, roleId } = req.body;

      // Al crear un nuevo asistente, tratamos el estado como true (activo)
      const attendee = await Attendee.create({
        name,
        email,
        eventId,
        roleId,
        state: true, // Valor booleano 'true' para el estado activo
      });
      return res.status(201).json(attendee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al crear el asistente', error });
    }
  },

  async getAllAttendees(req, res) {
    try {
      const attendees = await Attendee.findAll({
        attributes: ['id', 'name', 'email', 'state'], // Incluye el estado
        include: [
          { model: Event, attributes: ['title', 'date'] },
          { model: Role, attributes: ['name', 'description'] }
        ]
      });
      return res.status(200).json(attendees);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener asistentes', error });
    }
  },

  async getAttendeeById(req, res) {
    try {
      const { id } = req.params;
      const attendee = await Attendee.findByPk(id, {
        attributes: ['id', 'name', 'email', 'state'], // Incluye el estado
        include: [
          { model: Event, attributes: ['title', 'date'] },
          { model: Role, attributes: ['name', 'description'] }
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
      const { name, email, eventId, roleId } = req.body;
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

  async updateAttendeeState(req, res) {
    try {
      const { id } = req.params;
      let { state } = req.body;

      // Validar que el estado sea un valor booleano (true o false)
      if (state !== true && state !== false) {
        return res.status(400).json({ message: 'El estado debe ser true o false' });
      }

      // Convertir id a número entero
      const attendeeId = parseInt(id, 10);

      if (isNaN(attendeeId)) {
        return res.status(400).json({ message: 'ID inválido' });
      }

      // Validar si el asistente existe
      const attendee = await Attendee.findByPk(attendeeId);
      if (!attendee) {
        return res.status(404).json({ message: 'Asistente no encontrado' });
      }

      // Actualizar el estado
      await attendee.update({ state });

      return res.status(204).json(); // Indicar que la actualización fue exitosa
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al actualizar el estado del asistente', error });
    }
  }
};
