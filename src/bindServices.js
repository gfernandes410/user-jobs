const ProfileService = require('./services/profile');
const bindServices = {};

bindServices.profileService = new ProfileService();

module.exports = bindServices;
