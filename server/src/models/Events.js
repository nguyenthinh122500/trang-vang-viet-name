const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Events.init(sequelize, DataTypes);
}

class Events extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    eventId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    businessId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Businesses',
        key: 'businessId'
      }
    },
    eventName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    eventDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eventStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    eventEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Events',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eventId" },
        ]
      },
      {
        name: "businessId",
        using: "BTREE",
        fields: [
          { name: "businessId" },
        ]
      },
    ]
  });
  }
}
