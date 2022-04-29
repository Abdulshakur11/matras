const { Users } = require("../../model/model");
const { signUser } = require("../../lib/jwt");

module.exports = {
	POST_LOGIN: async (req, res) => {
		try {
			const { username, password } = req.body;
			const foundUser = await Users.findAll({
				where: {
					username,
					password,
				},
			});

			if (!foundUser[0]?.dataValues) {
				return res.status(401).send({
					message: "Unauthorized !",
				});
			} else {
				res.status(200).json({
					token: signUser({
						id: foundUser[0]?.dataValues.id,
						username: foundUser[0]?.dataValues.username,
					}),
				});
			}
		} catch (err) {
			console.log(err);
			res.send(err);
		}
	},
};
