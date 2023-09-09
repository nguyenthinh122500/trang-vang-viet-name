const DataTypes = require("sequelize").DataTypes;
const _BusinessKeywords = require("./BusinessKeywords");
const _BusinessServices = require("./BusinessServices");
const _Businesses = require("./Businesses");
const _Career = require("./Career");
const _Categories = require("./Categories");
const _Events = require("./Events");
const _Images = require("./Images");
const _Keywords = require("./Keywords");
const _Locations = require("./Locations");
const _Promotions = require("./Promotions");
const _Reviews = require("./Reviews");
const _Services = require("./Services");

function initModels(sequelize) {
  const BusinessKeywords = _BusinessKeywords(sequelize, DataTypes);
  const BusinessServices = _BusinessServices(sequelize, DataTypes);
  const Businesses = _Businesses(sequelize, DataTypes);
  const Career = _Career(sequelize, DataTypes);
  const Categories = _Categories(sequelize, DataTypes);
  const Events = _Events(sequelize, DataTypes);
  const Images = _Images(sequelize, DataTypes);
  const Keywords = _Keywords(sequelize, DataTypes);
  const Locations = _Locations(sequelize, DataTypes);
  const Promotions = _Promotions(sequelize, DataTypes);
  const Reviews = _Reviews(sequelize, DataTypes);
  const Services = _Services(sequelize, DataTypes);

  BusinessKeywords.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(BusinessKeywords, { as: "BusinessKeywords", foreignKey: "businessId"});
  BusinessServices.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(BusinessServices, { as: "BusinessServices", foreignKey: "businessId"});
  Career.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Career, { as: "Careers", foreignKey: "businessId"});
  Events.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Events, { as: "Events", foreignKey: "businessId"});
  Images.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Images, { as: "Images", foreignKey: "businessId"});
  Promotions.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Promotions, { as: "Promotions", foreignKey: "businessId"});
  Reviews.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Reviews, { as: "Reviews", foreignKey: "businessId"});
  Businesses.belongsTo(Categories, { as: "category", foreignKey: "categoryId"});
  Categories.hasMany(Businesses, { as: "Businesses", foreignKey: "categoryId"});
  BusinessKeywords.belongsTo(Keywords, { as: "keyword", foreignKey: "keywordId"});
  Keywords.hasMany(BusinessKeywords, { as: "BusinessKeywords", foreignKey: "keywordId"});
  Businesses.belongsTo(Locations, { as: "location", foreignKey: "locationId"});
  Locations.hasMany(Businesses, { as: "Businesses", foreignKey: "locationId"});
  BusinessServices.belongsTo(Services, { as: "service", foreignKey: "serviceId"});
  Services.hasMany(BusinessServices, { as: "BusinessServices", foreignKey: "serviceId"});

  return {
    BusinessKeywords,
    BusinessServices,
    Businesses,
    Career,
    Categories,
    Events,
    Images,
    Keywords,
    Locations,
    Promotions,
    Reviews,
    Services,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
