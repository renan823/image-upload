const Sequelize = require('sequelize');

const name = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const database = new Sequelize(name, user, password, {
    dialect: 'mysql',
    host: host,
    models: [],
    sync: true
})
const connect = async () => {
    try {
        await database.authenticate();
        console.log("Connected");
    } catch(err) {
        console.error("Not connected" , err);
    }
}

module.exports = {
    database: database,
    connect: connect
};
