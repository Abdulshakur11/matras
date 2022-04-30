const { SliderTable, statusTable } = require("../model/model");

module.exports = {
	GET_SLIDERS: async (_, res) => {
		try {
			res.json(await SliderTable.findAll());
		} catch (err) {
			console.log(err);
		}
	},
	NEW_SLIDER: async (req, res) => {
		try {
			const { title } = req.body;
			const file = req.files;
			const [fileName] = file.map((e) => `https://my-app-hyfob.ondigitalocean.app/public/uploads/${e.originalname}`.split(' ').join(''));
			const newSlider = await SliderTable.create({ title, image_url: fileName });
			console.log(fileName);
			res.send(newSlider);
		} catch (err) {
			console.log(err);
		}
	},
  // ===============================
	GET_STATUS: async (_, res) => {
		try {
			res.send(await statusTable.findAll());
		} catch (err) {
			console.log(err);
		}
	},
	NEW_STATUS: async (req, res) => {
		try {
      const { years_of_experience, satisfied_customers, annual_warranty, daily_delivery } = req.body;
      await statusTable.create({ years_of_experience, satisfied_customers, annual_warranty, daily_delivery });
      res.send("Ok")
		} catch (err) {
			console.log(err);
		}
	},
  UPDATE_STATUS: async(req, res) => {
    const { id, years_of_experience, satisfied_customers, annual_warranty, daily_delivery } = req.body;
    await statusTable.update({years_of_experience, satisfied_customers, annual_warranty, daily_delivery}, {
      where: {
        id
      }
    });
    res.send('Updated');
  }
};
