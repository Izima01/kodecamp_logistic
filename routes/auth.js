const express = require("express");
require('dotenv').config();
const route = express.Router();
const registerController = require('../controllers/auth/register');
const loginController = require('../controllers/auth/login');

route.post('/register', registerController);

route.post('/login', loginController);

module.exports = route;