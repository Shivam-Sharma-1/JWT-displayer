const login = async (req, res) => {
	res.send("Fake login");
};

const dashboard = async (req, res) => {
	const luckyNum = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `Hello, user`,
		secret: `Here is your authorised data, your lucky number is ${luckyNum}`
	});
};

module.exports = {
	login,
	dashboard
};
