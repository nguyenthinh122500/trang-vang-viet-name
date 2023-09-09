const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Businesses.init(sequelize, DataTypes);
}

class Businesses extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    businessId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    businessName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "businessName"
    },
    businessNameEng: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    operator: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    categoryId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Categories',
        key: 'categoryId'
      }
    },
    locationId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Locations',
        key: 'locationId'
      }
    },
    rating: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    numberOfRatings: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    establishedYear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    employees: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    businessArea: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    certificate: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Businesses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "businessId" },
        ]
      },
      {
        name: "businessName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "businessName" },
        ]
      },
      {
        name: "categoryId",
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
      {
        name: "locationId",
        using: "BTREE",
        fields: [
          { name: "locationId" },
        ]
      },
    ]
  });
  }
}
