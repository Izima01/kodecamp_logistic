const express = require("express");
const route = express.Router();

const customerOnly = require('../utils/customerOnly');
const isUserLoggedIn = require('../utils/isUserLoggedIn');

const newShipping = require('../controllers/shipping/newShipping');
const fetchAllOrders = require('../controllers/shipping/fetchAll');

route.use(isUserLoggedIn);
route.use(customerOnly);

// Route to create a new shipping request
route.post('/create', newShipping);

// Route to get the list of all shipping requests by a customer
route.get('/view-all', fetchAllOrders);

module.exports = route;