const { sequelize } = require('./model');
const bodyParser = require('body-parser');
const express = require('express');
const authorize = require('./middleware/authorize');

const app = express();

app.use(bodyParser.json());
app.set('sequelize', sequelize);
app.set('models', sequelize.models);

const GetJobs = require('./controller/getJobs');

// @ts-ignore -- TODO: fix type problem
app.get('', authorize, async (req, res) => {
	return res.status(200).end();
});

// @ts-ignore -- TODO: fix type problem
app.get('/get-jobs', authorize, async (req, res) => {
	await GetJobs.execute(req, res);
});

module.exports = app;
