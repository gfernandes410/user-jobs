const { sequelize } = require('./model');
const bodyParser = require('body-parser');
const express = require('express');
const authorize = require('./middleware/authorize');

const app = express();

app.use(bodyParser.json());
app.set('sequelize', sequelize);
app.set('models', sequelize.models);

// @ts-ignore -- TODO: fix type problem
app.get('', authorize, async (req, res) => {
	return res.status(200).end();
});

module.exports = app;
