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
      const { status_num,	status_text } = req.body;
      await statusTable.create({ status_num,	status_text });
      res.send("Ok")
		} catch (err) {
			console.log(err);
		}
	},
  UPDATE_STATUS: async(req, res) => {
    const { id, status_num,	status_text } = req.body;
    await statusTable.update({status_num,	status_text}, {
      where: {
        id
      }
    });
    res.send('Updated');
  }
};
