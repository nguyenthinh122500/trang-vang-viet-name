const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Images.init(sequelize, DataTypes);
}

class Images extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    imageId: {
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
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "imageId" },
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
