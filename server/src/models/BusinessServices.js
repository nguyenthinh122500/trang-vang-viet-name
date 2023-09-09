const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return BusinessServices.init(sequelize, DataTypes);
}

class BusinessServices extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    businessServiceId: {
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
    serviceId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Services',
        key: 'serviceId'
      }
    }
  }, {
    sequelize,
    tableName: 'BusinessServices',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "businessServiceId" },
        ]
      },
      {
        name: "businessId",
        using: "BTREE",
        fields: [
          { name: "businessId" },
        ]
      },
      {
        name: "serviceId",
        using: "BTREE",
        fields: [
          { name: "serviceId" },
        ]
      },
    ]
  });
  }
}
