const multer = require('multer');
const path = require('path');
const uuid = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'tmp/');
    },

    filename: (req, file, cb) => {
        const name = uuid.v4();
        const extension = file.originalname.split('.')[1];

        cb(null, `${name}.${extension}`);
    }
})

module.exports = storage;