const { Users } = require("../../model/model");
const { signUser } = require("../../lib/jwt");

module.exports = {
	POST_LOGIN: async (req, res) => {
		const { username, password } = req.body;
		const foundUser = await Users.findAll();

    res.send('');
    
		// if (foundUser == []) {
		// 	return res.status(401).send({
		// 		message: "Unauthorized",
		// 	});
		// }
    // res.send(foundUser);

		// res.status(200).json({
		// 	token: signUser({ id: foundUser.id }),
		// });

	},
};
