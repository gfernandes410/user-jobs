/**
 * @typedef {import('./profile').default} Profile
 */

const Repository = require('../repository');

class ProfileRepostitory extends Repository {

    model;

    constructor() {
        super();
        this.model = this.models.Profile;
    }
    
	/**
	 * @param {number} id
	 * @returns {Promise<Profile | null>}
	 */
	async findById(id) {
		const response = await this.model.findOne({where: {id}});

		if (!response) {
			return null;
		}

		return response.dataValues;
	}

}

module.exports = ProfileRepostitory;
