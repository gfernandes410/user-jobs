/**
 * @typedef {import('sequelize').Model} Model
 */

const { Op } = require('sequelize');
const { sequelize } = require('../model');

const express = require('express');
const app = express();

class Repository {

    scope = {
        contracts: {
            active: {
                status: {[Op.ne]: 'terminated'},
            }
        },
        jobs: {
            unpaid: {
                paid: {[Op.eq]: null},
            },
            paided: {
                paid: {[Op.eq]: true}
            },
        }
    }

    /**
     * @type {Model}
     */
    // @ts-ignore
    model;
    models;

    constructor() {
        app.set('sequelize', sequelize);
        app.set('models', sequelize.models);

        this.models = app.get('models');
    }
}

module.exports = Repository;
