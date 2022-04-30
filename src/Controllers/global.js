const { SliderTable, statusTable } = require("../model/model");

module.exports = {
	GET_SLIDERS: async (_, res) => {
		try {
			res.send(await SliderTable.findAll());
		} catch (err) {
			console.log(err);
		}
	},
	NEW_SLIDER: async (req, res) => {
		try {
			const { title } = req.body;
			const file = req.files;
			const [filePath] = file.map((e) => e.path);
			const newSlider = await SliderTable.create({ title, image_url: filePath });
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
