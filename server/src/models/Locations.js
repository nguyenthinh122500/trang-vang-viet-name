const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Locations.init(sequelize, DataTypes);
}

class Locations extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    locationId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    locationName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "locationName"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Locations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locationId" },
        ]
      },
      {
        name: "locationName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locationName" },
        ]
      },
    ]
  });
  }
}
