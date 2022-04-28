const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../../public/uploads"));
	},


	filename: function (req, file, cb) {
		const name = file.originalname.split(" ").join("");
		cb(null, name);
	},
});

const upload = multer({storage: storage});

module.exports = upload
