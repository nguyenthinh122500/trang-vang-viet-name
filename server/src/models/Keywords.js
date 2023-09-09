const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Keywords.init(sequelize, DataTypes);
}

class Keywords extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    keywordId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    keyword: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "keyword"
    }
  }, {
    sequelize,
    tableName: 'Keywords',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "keywordId" },
        ]
      },
      {
        name: "keyword",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "keyword" },
        ]
      },
    ]
  });
  }
}
