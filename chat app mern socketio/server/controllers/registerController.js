function register(req, res) {
	console.log(req.body);
	res.send({ mssg: "hello" });
}

module.exports = { register };
