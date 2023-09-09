const sequelize = require('../models/index');
const initModel = require('../models/init-models');
const { succesCode, errorCode, failCode } = require('../reponse/reponse');
const models = initModel(sequelize)
const { Op } = require('sequelize');
const getBussinessByCareers = async (req, res) => {
    try {
        const { title } = req.params; 
        const result = await models.Career.findAll({
            where: {
                careerName: {
                    [Op.like]: `%${title}%`
                }
            },
            include: ['business'] 
        });
        
        succesCode(res, result, `Lấy Danh Sách Công Ty Theo ${title} Thành Công!!!`);
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
}


const getAllCareers = async(req,res)=>{
    try {
       
        let result = await models.Career.findAll()
        succesCode(res, result, `Lấy Danh Sách Ngành Nghề Thành Công!!!`)
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
}



module.exports = {getBussinessByCareers,getAllCareers}