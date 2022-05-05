const { Techology } = require("../model/model");

module.exports = {
	GET_TECHNOLOGY: async (_, res) => {
		res.json(await Techology.findAll());
	},

	NEW_TECHNOLOGY: async (req, res) => {
		const { tech_name, tech_description, tech_video, isNew, isDelete } = req.body;

		let imagesArr = [];
		const file = req.files;
		const fileName = file.map((e) =>
			`https://my-app-hyfob.ondigitalocean.app/public/uploads/${e.originalname}`
				.split(" ")
				.join("")
		);
		imagesArr.push(fileName);
		const [tech_image] = imagesArr;

		const newTechnology = await Techology.create({
			tech_name,
			tech_description,
			tech_image,
			tech_video,
			isNew,
			isDelete,
		});
		res.send(newTechnology);
	},

	UPDATE_TECHNOLOGY: async (req, res) => {
		const { id, tech_name, tech_description, tech_video, isNew } = req.body;
		let imagesArr = [];
		const file = req.files;
		const fileName = file.map((e) =>
			`https://my-app-hyfob.ondigitalocean.app/public/uploads/${e.originalname}`
				.split(" ")
				.join("")
		);
		imagesArr.push(fileName);
		const [tech_image] = imagesArr;
		await Techology.update(
			{ tech_name, tech_description, tech_image, tech_video, isNew },
			{
				where: {
					id,
				},
			}
		);

		res.send("Updated");
	},

	DELETE_TECHNOLOGY: async (req, res) => {
		const { id, isDelete } = req.body;

		await Techology.update({ isDelete }, { where: { id } });
    res.json("Deleted !")
	},
};
