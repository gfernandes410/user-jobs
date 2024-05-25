/**
 * @typedef {import('./../../repositories/job/job').default} Job
 * @typedef {import('./response').default} Response
 * @typedef {import('./../../types').HttpResponse} HttpResponse
 * @typedef {import('./../../types').HttpResquest} HttpRequest
 */

const Controller = require('./../controller');
const JobRepository = require('./../../repositories/job');

class GetJobs extends Controller {

	#jobRepository;

	constructor(){
		super();
		this.#jobRepository = new JobRepository();
	}

	/**
	 * @param {HttpRequest} req 
	 */
	validate(req) {
		return;
	}

	/**
	 * @param {HttpRequest} req 
	 * @param {HttpResponse} res 
	 */
	async run(req, res) {
		const {id} = req.profile;

		const result = await this.#jobRepository.getAllJobsByProfileId(id);
	
	    res.json(GetJobs.mapper(result));
	}

	/**
	 * @param {Job[]} result
	 * @param {Response[]} result
	 */
	static mapper(result){
		return result.map((item) => {
			return {
				// @ts-ignore -- TODO fix return type
				jobId: item.dataValues.id,
				// @ts-ignore -- TODO fix return type
				description: item.dataValues.description,
				// @ts-ignore -- TODO fix return type
				price: item.dataValues.price,
				// @ts-ignore -- TODO fix return type
				paid: item.dataValues.paid,
				// @ts-ignore -- TODO fix return type
				ContractId: item.dataValues.ContractId,
				// @ts-ignore -- TODO fix return type
				ClientId: item.dataValues.Contract.ClientId,
				// @ts-ignore -- TODO fix return type
				ContractorId: item.dataValues.Contract.ContractorId,
			}
		})
	}

}

module.exports = GetJobs;
