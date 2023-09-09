const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Categories.init(sequelize, DataTypes);
}

class Categories extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    categoryId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    categoryName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "categoryName"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
      {
        name: "categoryName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "categoryName" },
        ]
      },
    ]
  });
  }
}
