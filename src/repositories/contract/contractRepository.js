/**
 * @typedef {import('./contract').default} Contract
 */

const Repository = require('../repository');

class ContractRepostitory extends Repository {

    constructor() {
        super();
        this.model = this.models.Contract;
    }
}

module.exports = ContractRepostitory;
