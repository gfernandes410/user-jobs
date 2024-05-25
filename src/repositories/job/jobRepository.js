/**
 * @typedef {import('./job').default} Job
 */

const { Op } = require('sequelize');
const ContractRepository = require('../contract');
const Repository = require('../repository');

class JobRepository extends Repository {

    #contractRepository;

    constructor() {
        super();
        this.model = this.models.Job;
        this.#contractRepository = new ContractRepository();
    }

    /**
     * @param {number} id
     * @returns {Promise<Job[]>} TODO fix this type, return a lot of stuff
     */
    async getAllJobsByProfileId(id){
        return this.model.findAll({
            include: {
                model: this.#contractRepository.model,
                required: true,
                where: {
                    ...this.scope.contracts.active,
                    [Op.or]: [
                        { ContractorId: id },
                        { ClientId: id }
                    ],
                }
            },
        });
    }

}

module.exports = JobRepository;
