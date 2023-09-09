const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Services.init(sequelize, DataTypes);
}

class Services extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    serviceId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    serviceName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "serviceName"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Services',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "serviceId" },
        ]
      },
      {
        name: "serviceName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "serviceName" },
        ]
      },
    ]
  });
  }
}
