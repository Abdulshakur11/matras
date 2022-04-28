const { Users } = require("../../model/model");

module.exports = {
	GET_USERS: async (_, res) => {
		res.send(await Users.findAll());
	},
	NEW_USER: async (req, res) => {
		const { username, password } = req.body;
		await Users.create({ username, password });
		res.send("New user is created");
	},
};
