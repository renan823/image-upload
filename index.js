const env = require('dotenv');
const express = require('express');
const app = express();
const path = require('path');

env.config();
const { connect } = require('./src/database.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./src/picture.routes'));

connect();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(3000, () => {
    console.log("connected");
})