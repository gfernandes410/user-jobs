
/**
 * @typedef {import('./../../repositories/profile/profile').default} Profile
 */

const ProfileRepository = require('./../../repositories/profile');

class ProfileService {

    #profileRepository;

    constructor() {
        this.#profileRepository = new ProfileRepository();
    }

    /**
     * @param {Number} id
     * @returns {Promise<Profile>}
     */
    async findProfileById(id) {
        return this.#profileRepository.findById(id);
    }

}

module.exports = ProfileService;
