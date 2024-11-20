// controllers/eventController.js
const { Event, EventType, Attendee, Role } = require("../models");

module.exports = {
  // Crear un nuevo evento
  async createEvent(req, res) {
    try {
      const { title, description, date, eventTypeId } = req.body;
      const event = await Event.create({
        title,
        description,
        date,
        eventTypeId,
      });
      return res.status(201).json(event);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error al crear el evento", error });
    }
  },
  // Obtener todos los asistentes de un evento por ID
  // Obtener todos los asistentes por ID del evento
  async getAttendeesByEventId(req, res) {
    try {
      const { eventId } = req.params;
      const attendees = await Attendee.findAll({
        where: { eventId },
        attributes: ["name", "email"], // Ajusta según los campos que quieras incluir
        include: [
          {
            model: Event,
            attributes: ["title"], // Puedes incluir información del evento si es necesario
          },
          {
            model: Role,
            attributes: ["name"], // Incluye información del rol si es necesario
          },
        ],
      });
      if (!attendees || attendees.length === 0) {
        return res
          .status(404)
          .json({ message: "No se encontraron asistentes para este evento" });
      }
      return res.status(200).json(attendees);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error al obtener asistentes", error });
    }
  },

  // Obtener todos los eventos
  async getAllEvents(req, res) {
    try {
      const events = await Event.findAll({
        include: [
          { model: EventType, attributes: ["name"] },
          { model: Attendee, attributes: ["name", "email"] },
        ],
      });
      return res.status(200).json(events);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error al obtener eventos", error });
    }
  },

  // Obtener un evento por ID
  async getEventById(req, res) {
    try {
      const { id } = req.params;
      const event = await Event.findByPk(id, {
        include: [
          { model: EventType, attributes: ["name"] },
          { model: Attendee, attributes: ["name", "email"] },
        ],
      });
      if (!event) {
        return res.status(404).json({ message: "Evento no encontrado" });
      }
      return res.status(200).json(event);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error al obtener el evento", error });
    }
  },

  // Actualizar un evento por ID
  async updateEvent(req, res) {
    try {
      const { id } = req.params;
      const { title, description, date, eventTypeId } = req.body;
      const event = await Event.findByPk(id);
      if (!event) {
        return res.status(404).json({ message: "Evento no encontrado" });
      }
      await event.update({ title, description, date, eventTypeId });
      return res.status(200).json(event);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error al actualizar el evento", error });
    }
  },

  // Eliminar un evento por ID
  async deleteEvent(req, res) {
    try {
      const { id } = req.params;
      const event = await Event.findByPk(id);
      if (!event) {
        return res.status(404).json({ message: "Evento no encontrado" });
      }
      await event.destroy();
      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error al eliminar el evento", error });
    }
  },
};