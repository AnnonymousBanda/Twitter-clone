const express = require('express');
const {
    home,
    login,
    signup,
    logout,
    profile,
} = require('./../controllers/viewController.js');
const {
    signup: authSignup,
    login: authLogin,
    protect,
} = require('./../controllers/authController.js');

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.route('/').get(protect, home);

route.route('/signup').get(signup).post(authSignup);

route.route('/login').get(login).post(authLogin);

route.route('/logout').get(logout);

route.route('/profile').get(protect, profile);

module.exports = route;
