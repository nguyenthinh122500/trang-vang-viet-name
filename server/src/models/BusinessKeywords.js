const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return BusinessKeywords.init(sequelize, DataTypes);
}

class BusinessKeywords extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    businessKeywordId: {
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
    keywordId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Keywords',
        key: 'keywordId'
      }
    }
  }, {
    sequelize,
    tableName: 'BusinessKeywords',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "businessKeywordId" },
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
        name: "keywordId",
        using: "BTREE",
        fields: [
          { name: "keywordId" },
        ]
      },
    ]
  });
  }
}
