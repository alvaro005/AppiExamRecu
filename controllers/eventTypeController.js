// controllers/eventTypeController.js
const { EventType } = require('../models');

module.exports = {
  // Obtener todos los tipos de eventos
  async getAllEventTypes(req, res) {
    try {
      const eventTypes = await EventType.findAll();
      return res.status(200).json(eventTypes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener los tipos de eventos', error });
    }
  },

  // Obtener un tipo de evento por ID
  async getEventTypeById(req, res) {
    try {
      const { id } = req.params;
      const eventType = await EventType.findByPk(id);
      if (!eventType) {
        return res.status(404).json({ message: 'Tipo de evento no encontrado' });
      }
      return res.status(200).json(eventType);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener el tipo de evento', error });
    }
  }
};
