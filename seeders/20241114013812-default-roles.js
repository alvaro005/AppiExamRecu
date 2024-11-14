// seeders/xxxx-default-roles.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Verifica si los roles ya existen
    const rolesExistentes = await queryInterface.sequelize.query(
      `SELECT name FROM Roles WHERE name IN ('Invitado', 'Orador', 'Organizador', 'Moderador', 'Patrocinador', 'Asistente Técnico')`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const nombresExistentes = rolesExistentes.map(role => role.name);

    // Define los roles que deseas insertar
    const roles = [
      {
        name: 'Invitado',
        description: 'Asistente que participa como invitado en el evento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Orador',
        description: 'Asistente que participa como orador en el evento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Organizador',
        description: 'Persona encargada de organizar el evento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moderador',
        description: 'Persona encargada de moderar las actividades del evento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patrocinador',
        description: 'Entidad o persona que financia el evento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Asistente Técnico',
        description: 'Persona encargada de la asistencia técnica en el evento',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    // Filtra los roles que no existen para evitar duplicados
    const rolesParaInsertar = roles.filter(role => !nombresExistentes.includes(role.name));

    // Inserta solo los roles que no existen
    if (rolesParaInsertar.length > 0) {
      await queryInterface.bulkInsert('Roles', rolesParaInsertar, {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
