const { Products } = require("../../model/model");

module.exports = {
	GET_PRODUCTS: async (_, res) => {
		res.send(
			await Products.findAll({
				order: [["id", "ASC"]],
			})
		);
	},

	NEW_PRODUCTS: async (req, res) => {
		try {
			const {
				product_name,
				product_price,
				product_weigth,
				product_size,
				product_warranty,
				product_volume,
				product_aksiy_price,
				product_description,
				isNew,
				isAcrive,
				isDelete,
				categoryId,
			} = req.body;
			let imagesArr = [];
			const file = req.files;
			imagesArr.push(file.map((e) => e.path));
			const [product_image] = imagesArr;
			
			await Products.create({
				product_name,
				product_price,
				product_weigth,
				product_size,
				product_warranty,
				product_volume,
				product_aksiy_price,
				product_description,
				product_image,
				isNew,
				isAcrive,
				isDelete,
				categoryId,
			});

			res.send("New product is added");
		} catch (err) {
			res.send(err);
		}
	},

	UPDATE_PRODUCTS: async (req, res) => {
		const {
			id,
			product_name,
			product_price,
			product_weigth,
			product_size,
			product_warranty,
			product_volume,
			product_aksiy_price,
			product_description,
			isNew,
			isAcrive,
		} = req.body;

		await Products.update(
			{
				product_name,
				product_price,
				product_weigth,
				product_size,
				product_warranty,
				product_volume,
				product_aksiy_price,
				product_description,
				isNew,
				isAcrive,
			},
			{
				where: {
					id,
				},
			}
		);

		res.send("Product is updated");
	},

	DELETE_PRODUCTA: async (req, res) => {
		const { id, isDelete } = req.body;
		await Products.update(
			{ isDelete },
			{
				where: {
					id,
				},
			}
		);

		res.send("Product is deleted");
	},
};
