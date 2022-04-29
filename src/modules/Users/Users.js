const { Users } = require("../../model/model");

module.exports = {
	GET_USERS: async (_, res) => {
		res.send(await Users.findAll());
	},
	NEW_USER: async (req, res) => {
		try {
			const { username, password } = req.body;
			const newUser = await Users.create({username, password})			
			res.send(newUser);
		} catch (err) {
			res.send(err);
		}
	},
};
