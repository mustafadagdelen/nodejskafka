module.exports = (app, config) => {

	const services = new Map([
		[{method: 'post',  state: '/message/sendData'}, '/app/controllers/messageReceiverController'],
	]);

	services.forEach((value, key) => {
		app[key.method](key.state, require(config.root + value)(app, config));
	});
};
