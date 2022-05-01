const { Categories } = require("../model/model");

module.exports = {
	GET_CATEGORIES: async (_, res) => {
		res.send(await Categories.findAll({
			order: [
				["id", "ASC"]
			]
		}));
	},

	NEW_CATEGORY: async (req, res) => {
		const { category_name, isDelete } = req.body;
		const newCategory = await Categories.create({ category_name, isDelete });
		res.send(newCategory);
	},

	UPDATE_CATEGORY: async (req, res) => {
		const { category_name, id } = req.body;
		const updateCategory = await Categories.update(
			{ category_name },
			{
				where: {
					id,
				},
			}
		);
		res.send(updateCategory);
	},

	DELETE_CATEGORY: async (req, res) => {
		const { id, isDelete } = req.body;
		const deleteCategory = await Categories.update(
			{ isDelete },
			{
				where: {
					id,
				},
			}
		);
		res.send(deleteCategory);
	},
};
