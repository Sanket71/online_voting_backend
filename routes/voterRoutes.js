const express = require('express');
const voterController = require('./../controller/voterController');

const Router = express.Router();

Router.post('/register', voterController.register);

module.exports = Router;
