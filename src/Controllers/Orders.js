const { Orders } = require("../model/model");

module.exports = {
	GET_ORDERS: async (_, res) => {
		try {
			res.send(
				await Orders.findAll({
					order: [["id", "DESC"]],
				})
			);
		} catch (err) {
			console.log(err);
		}
	},
	NEW_ORDERS: async (req, res) => {
		try {
			const { name, phone_number, product_name, product_qountity, isDelete } = req.body;
			const newOrerd = await Orders.create({
				name,
				phone_number,
				product_name,
				product_qountity,
				isDelete,
			});

			res.send(newOrerd);
		} catch (err) {
			console.log(err);
		}
	},
	DELETE_ORDERS: async (req, res) => {
		try {
			const { id, isDelete } = req.body;
			const deleteOrder = await Orders.update(
				{ isDelete },
				{
					where: {
						id,
					},
				}
			);
			res.send(deleteOrder);
		} catch (err) {
			console.log(err);
		}
	},
};
