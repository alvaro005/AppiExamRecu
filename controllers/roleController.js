const { Role } = require('../models');

module.exports = {
  // Obtener todos los roles
  async getAllRoles(req, res) {
    try {
      const roles = await Role.findAll();
      return res.status(200).json(roles);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener los roles', error });
    }
  }
};
