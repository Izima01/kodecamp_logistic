const express = require("express");
const route = express.Router();

const riderOnly = require('../utils/riderOnly');
const isUserLoggedIn = require('../utils/isUserLoggedIn');

const fetchAllOrders = require('../controllers/shipping/fetchAll');

route.use(isUserLoggedIn);
route.use(riderOnly);

// Route to get the list of all shipping requests by a customer
route.get('/view-all', fetchAllOrders);

module.exports = route;