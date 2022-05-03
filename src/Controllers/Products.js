const { Products } = require("../model/model");

module.exports = {
	GET_PRODUCTS: async (_, res) => {
		res.send(
			await Products.findAll({
				order: [["id", "DESC"]],
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
				isActive,
				isDelete,
				categoryId,
			} = req.body;

			let imagesArr = [];
			const file = req.files;
			const fileName = file.map((e) => `https://my-app-hyfob.ondigitalocean.app/public/uploads/${e.originalname}`.split(" ").join(""));
			imagesArr.push(fileName);
			const [product_image] = imagesArr;

			await Products.create({
				product_name,
				product_price,
				product_weigth: [{ title: "Yuklama", value: product_weigth }],
				product_warranty: [{ title: "Kafolat", value: product_warranty }],
				product_size: [{ title: "O’lchami", value: product_size }],
				product_volume: [{title: "Sig’imi", value: product_volume}],
				product_aksiy_price,
				product_description,
				product_image,
				isNew,
				isActive,
				isDelete,
				categoryId,
			});

			res.send("New product is added");
		} catch (err) {
			console.log(err);
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
			isActive,
		} = req.body;

		await Products.update(
			{
				product_name,
				product_price,
				product_weigth: [{ title: "Yuklama", value: product_weigth }],
				product_warranty: [{ title: "Kafolat", value: product_warranty }],
				product_size: [{ title: "O’lchami", value: product_size }],
				product_volume: [{title: "Sig’imi", value: product_volume}],
				product_aksiy_price,
				product_description,
				isNew,
				isActive,
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
