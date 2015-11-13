var eventbus = require("./event-bus");
var app;

function init(newApp) {
	app = newApp;
	listen();
}

function listen() {
	eventbus.on("users-list:user-selected", function(user) {
		app.setState({
			currentUser: user
		});
	});
}

module.exports = {init: init};
