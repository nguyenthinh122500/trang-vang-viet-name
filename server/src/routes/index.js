const express = require('express');
const routeBussiness = require('./routeBussiness');
const routeCareers = require('./routeCareers');
const routes = express.Router();


routes.use('/bussiness', routeBussiness)
routes.use('/careers', routeCareers)



module.exports = routes