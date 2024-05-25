/**
 * @typedef {import('./../types').HttpResquest} Request
 * @typedef {import('./../types').HttpResponse} Response
 */

class Controller {

	/**
	 * @param {Request} req 
	 * @param {Response} res 
	 */
	async execute(req, res) {
		try {
			this.validate(req);
			await this.run(req, res);
		} catch (error) {
			// @ts-ignore -- TODO: fix type erro
			res.status(403).end(error.message);
		}
	}

	/**
	 * @param {Request} req 
	 */
	validate(req) {
		throw new Error('Must be implemented at lower level.')
	}

	/**
	 * @param {Request} req 
	 * @param {Response} res 
	 */
	async run(req, res) {
		throw new Error('Must be implemented at lower level.')
	}
}

module.exports = Controller;
