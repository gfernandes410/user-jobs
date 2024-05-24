const { sequelize } = require('../model');

const express = require('express');
const app = express();

class Repository {

    models;

    constructor() {
        app.set('sequelize', sequelize);
        app.set('models', sequelize.models);

        this.models = app.get('models');
    }
}

module.exports = Repository;
