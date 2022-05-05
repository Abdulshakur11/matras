const { Location } = require("../model/model");

module.exports = {
	GET_LOCATIONS: async (_, res) => {
		res.send(await Location.findAll());
	},

	NEW_LOCATION: async (req, res) => {
		const { address, location, isActive, description, isDelete } = req.body;
		let imagesArr = [];
		const file = req.files;
		const fileName = file.map((e) =>
			`https://my-app-hyfob.ondigitalocean.app/public/uploads/${e.originalname}`
				.split(" ")
				.join("")
		);
		imagesArr.push(fileName);
		const [location_image] = imagesArr;

		const newLocation = await Location.create({
			address,
			location,
			location_image,
			isActive,
			description,
			isDelete,
		});
		res.send(newLocation);
	},

	UPDATE_LCATION: async (req, res) => {
		const { id, address, location, isActive, description } = req.body;
		let imagesArr = [];
		const file = req.files;
		const fileName = file.map((e) =>
			`https://my-app-hyfob.ondigitalocean.app/public/uploads/${e.originalname}`
				.split(" ")
				.join("")
		);
		imagesArr.push(fileName);
		const [location_image] = imagesArr;

		await Location.update(
			{ address, location, location_image, isActive, description },
			{
				where: {
					id,
				},
			}
		);
		res.send("Updated !");
	},

  DELETE_LOCATION: async(req, res) => {
    const {id, isDelete} = req.body;
    await Location.update({isDelete}, {where: {id}});
    res.send("Deleted !")
  }
};
