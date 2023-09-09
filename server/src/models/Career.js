const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Career.init(sequelize, DataTypes);
}

class Career extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    careerId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    careerName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    businessId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Businesses',
        key: 'businessId'
      }
    }
  }, {
    sequelize,
    tableName: 'Career',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "careerId" },
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
