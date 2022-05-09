const { Customers } = require("../model/model");

module.exports = {
	GET_CUSTOMERS: async (_, res) => {
		res.send(await Customers.findAll({
			order: [
				["id", "DESC"]
			]
		}));
	},
	NEW_CUSTOMER: async (req, res) => {
		try {
			const { phone_number, feed_back, isDelete } = req.body;
			const newCustomer = await Customers.create({
				phone_number,
				feed_back,
				isDelete,
			});
			res.send(newCustomer);
		} catch (err) {
			console.log(err);
		}
	},
	DELETE_CUSTOMER: async (req, res) => {
		try {
			const { id, isDelete } = req.body;
      console.log(isDelete);
			const deleteCustomer = await Customers.update(
				{ isDelete },
				{
					where: {
						id,
					},
				}
			);
			res.send(deleteCustomer);
		} catch (err) {
			console.log(err);
		}
	},
};
