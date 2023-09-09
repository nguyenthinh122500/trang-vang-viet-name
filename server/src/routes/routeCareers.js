const express = require('express');
const { getBussinessByCareers, getAllCareers } = require('../controllers/careers');
const routeCareers = express.Router();


routeCareers.get('/getbussinessbycareers/:title', getBussinessByCareers);
routeCareers.get('/getcareers', getAllCareers)


module.exports = routeCareers