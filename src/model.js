const Sequelize = require('sequelize');

// @ts-ignore -- No ideia why does not accept contructor
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './database.sqlite3',
});

class Profile extends Sequelize.Model {}
Profile.init(
	{
		firstName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		lastName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		balance: {
			type: Sequelize.DECIMAL(12, 2),
		},
	},
	{
		sequelize,
		modelName: 'Profile',
	}
);

class Contract extends Sequelize.Model {}
Contract.init(
	{
		status: {
			type: Sequelize.ENUM('new', 'in_progress', 'terminated'),
		},
	},
	{
		sequelize,
		modelName: 'Contract',
	}
);

class Job extends Sequelize.Model {}
Job.init(
	{
		description: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		price: {
			type: Sequelize.DECIMAL(12, 2),
			allowNull: false,
		},
		paid: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		paymentDate: {
			type: Sequelize.DATE,
		},
	},
	{
		sequelize,
		modelName: 'Job',
	}
);

Contract.belongsTo(Profile, { as: 'Client' });
Contract.belongsTo(Profile, { as: 'Contractor' });
Contract.hasMany(Job);
Job.belongsTo(Contract);
Profile.hasMany(Contract, { as: 'Client', foreignKey: 'ClientId' });
Profile.hasMany(Contract, { as: 'Contractor', foreignKey: 'ContractorId' });

module.exports = {
	Contract,
	Job,
	Profile,
	sequelize,
};
