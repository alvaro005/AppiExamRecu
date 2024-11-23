const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.hasMany(models.Attendee, { foreignKey: 'eventId' });
      Event.belongsTo(models.EventType, { foreignKey: 'eventTypeId' });
    }
  }
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    eventTypeId: DataTypes.INTEGER,
    hour: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
