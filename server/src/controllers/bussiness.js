const sequelize = require('../models/index');
const initModel = require('../models/init-models');
const { succesCode, errorCode, failCode } = require('../reponse/reponse');
const models = initModel(sequelize)
const { Op } = require('sequelize');

const getBussiness = async (req, res) => {
  try {
    let result = await models.Businesses.findAll({ include: ['location', 'category','Images','Careers', {
      model: models.BusinessKeywords,
      as: 'BusinessKeywords',
      include: [{ model: models.Keywords, as: 'keyword' }],
    }] })
    succesCode(res, result, "Lấy Danh Sách Công Ty Thành Công!!!")
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

module.exports  = { getBussiness}