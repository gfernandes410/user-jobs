const { faker } = require('@faker-js/faker');
const { Profile, Contract, Job } = require('../src/model');

const QUANTITY_CONTRACTS = 10;
const QUANTITY_JOBS = 20;
const QUANTITY_PROFILES = 10;

seed();

async function seed() {
    await Profile.sync({ force: true });
    await Contract.sync({ force: true });
    await Job.sync({ force: true });

    await createProfile(QUANTITY_PROFILES);
    await createContract(QUANTITY_CONTRACTS);
    await createJob(QUANTITY_JOBS);
}

/**
 * @param {number} [quantity]
 * @returns {Promise<void>}
 */
async function createProfile(quantity = 10) {
    for (let index = 0; index < quantity; index++) {
        await Profile.create({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            balance: faker.number.float(1000),
          });
    }
}

/**
 * @param {number} [quantity]
 * @returns {Promise<void>}
 */
async function createContract(quantity = 10) {
	const status = ['new', 'in_progress', 'terminated'];

	for (let index = 0; index < quantity; index++) {
		await Contract.create({
			status: faker.helpers.arrayElement(status),
			ClientId: faker.helpers.rangeToNumber({min: 1, max: QUANTITY_PROFILES}),
			ContractorId: faker.helpers.rangeToNumber({min: 1, max: QUANTITY_PROFILES}),
		});
    }
}

/**
 * @param {number} [quantity]
 * @returns {Promise<void>}
 */
async function createJob(quantity = 10) {
	for (let index = 0; index < quantity; index++) {
		const paid =  faker.datatype.boolean();

		await Job.create({
			description: faker.lorem.paragraphs(),
			price: faker.commerce.price({min: 40}),
			paid,
			paymentDate: paid ? new Date() : null,
			ContractId: faker.helpers.rangeToNumber({min: 1, max: QUANTITY_CONTRACTS}),
		});
    }
}
