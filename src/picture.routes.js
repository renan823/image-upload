let Router = require('express').Router();
const multer = require('multer');
const storage = require('./multer.config');
const controller = require('./picture.controller');

const upload = multer({ storage });

Router.get('/image', controller.get)

Router.post('/upload', upload.single('image'), controller.save);

module.exports = Router;