const express = require('express');
const { getBussiness } = require('../controllers/bussiness');
const routeBussiness = express.Router();


routeBussiness.get('/getallbussiness', getBussiness)


module.exports = routeBussiness