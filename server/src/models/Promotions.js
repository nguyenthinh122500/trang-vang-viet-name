const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Promotions.init(sequelize, DataTypes);
}

class Promotions extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    promotionId: {
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
    promotionName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    promotionStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    promotionEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Promotions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "promotionId" },
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
