const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventType extends Model {
    static associate(models) {
      EventType.hasMany(models.Event, { foreignKey: 'eventTypeId' });
    }
  }
  EventType.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'EventType',
  });
  return EventType;
};
