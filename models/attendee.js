const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendee extends Model {
    static associate(models) {
      Attendee.belongsTo(models.Event, { foreignKey: 'eventId' });
      Attendee.belongsTo(models.Role, { foreignKey: 'roleId' });
    }
  }
  Attendee.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,  // Cambiado a BOOLEAN
        defaultValue: true,       // Valor predeterminado es 'true'
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('GETDATE()'), // Usar la función GETDATE() de SQL Server
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('GETDATE()'), // Usar la función GETDATE() de SQL Server
      },
    },
    {
      sequelize,
      modelName: 'Attendee',
      timestamps: true,
    }
  );
  return Attendee;
};
