var express = require('express');
var routes = express.Router();
var indexController = require('./controllers/index');

routes.get('/', indexController.indexController);

module.exports = routes
