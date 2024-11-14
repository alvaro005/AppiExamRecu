'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const eventTypes = [
      {
        name: 'Conferencia',
        description: 'Un evento en el que un orador o un grupo de oradores presentan sobre un tema específico.',
      },
      {
        name: 'Seminario',
        description: 'Un evento educativo donde se enseña o discute un tema.',
      },
      {
        name: 'Taller',
        description: 'Un evento interactivo donde los participantes realizan actividades prácticas.',
      },
      {
        name: 'Reunión',
        description: 'Una junta formal o informal para discutir ciertos temas o tomar decisiones.',
      },
    ];

    for (const eventType of eventTypes) {
      // Verificamos si el registro ya existe, si no, lo creamos
      await queryInterface.rawSelect(
        'EventTypes',
        {
          where: { name: eventType.name },
        },
        ['id']
      ) || await queryInterface.bulkInsert('EventTypes', [
        {
          name: eventType.name,
          description: eventType.description,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('EventTypes', null, {});
  }
};
