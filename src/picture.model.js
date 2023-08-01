const Sequelize = require('sequelize');
const { database } = require('./database.config');

const Picture = database.define('picture', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    image: {
        type: Sequelize.BLOB('long'),
        allowNull: false
    },

    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Picture;