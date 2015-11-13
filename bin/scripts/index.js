(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var config = {};

config.title = "多客服插件";

module.exports = config;

},{}],2:[function(require,module,exports){
"use strict";

var utils = {};

utils.log = function () {
	console.log.apply(console, arguments);
};

module.exports = utils;

},{}],3:[function(require,module,exports){
"use strict";

var Dialog = React.createClass({
	displayName: "Dialog",

	render: function render() {
		if (this.props.currentUser.name) {
			return React.createElement(
				"div",
				null,
				React.createElement("hr", null),
				React.createElement(
					"div",
					null,
					"正在和 ",
					this.props.currentUser.name,
					" 聊天"
				),
				this.renderTextarea()
			);
		} else {
			return React.createElement(
				"div",
				null,
				React.createElement("hr", null),
				React.createElement(
					"div",
					null,
					"没有选择用户~"
				)
			);
		}
	},
	renderTextarea: function renderTextarea() {
		return React.createElement(
			"div",
			null,
			React.createElement("textarea", null),
			React.createElement(
				"button",
				null,
				"Send"
			)
		);
	}
});

module.exports = Dialog;

},{}],4:[function(require,module,exports){
"use strict";

var Title = React.createClass({
	displayName: "Title",

	render: function render() {
		return React.createElement(
			"h1",
			null,
			this.props.title
		);
	}
});

module.exports = Title;

},{}],5:[function(require,module,exports){
"use strict";

var UserItem = React.createClass({
	displayName: "UserItem",

	handlerItemClick: function handlerItemClick() {
		if (this.props.onItemClick) {
			this.props.onItemClick(this.props.user);
		}
	},
	render: function render() {
		var className = this.props.currentUser == this.props.user ? "user-item active" : "user-item";
		return React.createElement(
			"div",
			{ className: className, onClick: this.handlerItemClick },
			this.props.user.name
		);
	}
});

module.exports = UserItem;

},{}],6:[function(require,module,exports){
"use strict";

var UserItem = require("./user-item");
var eventbus = require("../modules/event-bus");

var UsersList = React.createClass({
	displayName: "UsersList",

	broadcastItemClick: function broadcastItemClick(user) {
		eventbus.emit("users-list:user-selected", user);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "users-list" },
			React.createElement(
				"h2",
				null,
				"用户列表"
			),
			React.createElement("hr", null),
			this.renderList()
		);
	},
	renderList: function renderList() {
		var self = this;
		return this.props.users.map(function (user) {
			return React.createElement(UserItem, {
				user: user,
				key: user.name,
				onItemClick: self.broadcastItemClick,
				currentUser: self.props.currentUser });
		});
	}
});

module.exports = UsersList;

},{"../modules/event-bus":8,"./user-item":5}],7:[function(require,module,exports){
"use strict";

var stateManager = require("./modules/state-manager");
var config = require("./common/config");
var util = require("./common/util");

var UsersList = require("./components/users-list");
var Title = require("./components/title");
var Dialog = require("./components/dialog");

var mockState = {
	currentUser: {},
	users: [{ name: "Jerry", gender: 1 }, { name: "Lily", gender: 0 }, { name: "Tomy", gender: 1 }, { name: "Lucy", gender: 0 }, { name: "Richael", gender: 1 }, { name: "Avril", gender: 0 }]
};

var App = React.createClass({
	displayName: "App",

	getInitialState: function getInitialState() {
		return mockState;
	},
	componentDidMount: function componentDidMount() {
		util.log("App did mount!");
		stateManager.init(this);
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(Title, { title: config.title }),
			React.createElement(UsersList, { users: this.state.users, currentUser: this.state.currentUser }),
			React.createElement(Dialog, { currentUser: this.state.currentUser })
		);
	}
});

React.render(React.createElement(App, null), document.getElementById("app"));

},{"./common/config":1,"./common/util":2,"./components/dialog":3,"./components/title":4,"./components/users-list":6,"./modules/state-manager":9}],8:[function(require,module,exports){
"use strict";

module.exports = new EventEmitter2();

},{}],9:[function(require,module,exports){
"use strict";

var eventbus = require("./event-bus");
var app;

function init(newApp) {
	app = newApp;
	listen();
}

function listen() {
	eventbus.on("users-list:user-selected", function (user) {
		app.setState({
			currentUser: user
		});
	});
}

module.exports = { init: init };

},{"./event-bus":8}]},{},[7])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxnaXRcXHJlYWN0LWRlbW9cXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L2dpdC9yZWFjdC1kZW1vL3NyYy9zY3JpcHRzL2NvbW1vbi9jb25maWcuanMiLCJEOi9naXQvcmVhY3QtZGVtby9zcmMvc2NyaXB0cy9jb21tb24vdXRpbC5qcyIsIkQ6L2dpdC9yZWFjdC1kZW1vL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZGlhbG9nLmpzIiwiRDovZ2l0L3JlYWN0LWRlbW8vc3JjL3NjcmlwdHMvY29tcG9uZW50cy90aXRsZS5qcyIsIkQ6L2dpdC9yZWFjdC1kZW1vL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvdXNlci1pdGVtLmpzIiwiRDovZ2l0L3JlYWN0LWRlbW8vc3JjL3NjcmlwdHMvY29tcG9uZW50cy91c2Vycy1saXN0LmpzIiwiRDovZ2l0L3JlYWN0LWRlbW8vc3JjL3NjcmlwdHMvZmFrZV82ZGNjZTNkYi5qcyIsIkQ6L2dpdC9yZWFjdC1kZW1vL3NyYy9zY3JpcHRzL21vZHVsZXMvZXZlbnQtYnVzLmpzIiwiRDovZ2l0L3JlYWN0LWRlbW8vc3JjL3NjcmlwdHMvbW9kdWxlcy9zdGF0ZS1tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWhCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDOztBQUV2QixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7QUNKeEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVmLEtBQUssQ0FBQyxHQUFHLEdBQUcsWUFBVztBQUN0QixRQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7Q0FDdEMsQ0FBQTs7QUFFRCxNQUFN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dW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGNvbmZpZyA9IHt9O1xyXG5cclxuY29uZmlnLnRpdGxlID0gXCLlpJrlrqLmnI3mj5Lku7ZcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29uZmlnO1xyXG4iLCJ2YXIgdXRpbHMgPSB7fTtcblxudXRpbHMubG9nID0gZnVuY3Rpb24oKSB7XG5cdGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHM7XG4iLCJ2YXIgRGlhbG9nID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodGhpcy5wcm9wcy5jdXJyZW50VXNlci5uYW1lKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxoci8+XHJcblx0XHRcdFx0XHQ8ZGl2Puato+WcqOWSjCB7dGhpcy5wcm9wcy5jdXJyZW50VXNlci5uYW1lfSDogYrlpKk8L2Rpdj5cclxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlclRleHRhcmVhKCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxoci8+XHJcblx0XHRcdFx0XHQ8ZGl2PuayoeaciemAieaLqeeUqOaIt348L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0cmVuZGVyVGV4dGFyZWE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8dGV4dGFyZWE+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHQ8YnV0dG9uPlNlbmQ8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpYWxvZztcclxuIiwidmFyIFRpdGxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cclxuXHRcdCk7XHJcblx0fVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGl0bGU7XHJcblxyXG4iLCJ2YXIgVXNlckl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0aGFuZGxlckl0ZW1DbGljazogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodGhpcy5wcm9wcy5vbkl0ZW1DbGljaykge1xyXG5cdFx0XHR0aGlzLnByb3BzLm9uSXRlbUNsaWNrKHRoaXMucHJvcHMudXNlcik7XHJcblx0XHR9XHJcblx0fSxcclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGNsYXNzTmFtZSA9ICh0aGlzLnByb3BzLmN1cnJlbnRVc2VyID09IHRoaXMucHJvcHMudXNlcilcclxuXHRcdFx0PyBcInVzZXItaXRlbSBhY3RpdmVcIlxyXG5cdFx0XHQ6IFwidXNlci1pdGVtXCI7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmhhbmRsZXJJdGVtQ2xpY2t9PlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLnVzZXIubmFtZX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJdGVtO1xyXG4iLCJ2YXIgVXNlckl0ZW0gPSByZXF1aXJlKFwiLi91c2VyLWl0ZW1cIik7XHJcbnZhciBldmVudGJ1cyA9IHJlcXVpcmUoXCIuLi9tb2R1bGVzL2V2ZW50LWJ1c1wiKTtcclxuXHJcbnZhciBVc2Vyc0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0YnJvYWRjYXN0SXRlbUNsaWNrOiBmdW5jdGlvbih1c2VyKSB7XHJcblx0XHRldmVudGJ1cy5lbWl0KFwidXNlcnMtbGlzdDp1c2VyLXNlbGVjdGVkXCIsIHVzZXIpO1xyXG5cdH0sXHJcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtbGlzdFwiPlxyXG5cdFx0XHRcdDxoMj7nlKjmiLfliJfooag8L2gyPlxyXG5cdFx0XHRcdDxoci8+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyTGlzdCgpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fSxcclxuXHRyZW5kZXJMaXN0OiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLnVzZXJzLm1hcChmdW5jdGlvbih1c2VyKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PFVzZXJJdGVtIFxyXG5cdFx0XHRcdFx0dXNlcj17dXNlcn0gXHJcblx0XHRcdFx0XHRrZXk9e3VzZXIubmFtZX0gXHJcblx0XHRcdFx0XHRvbkl0ZW1DbGljaz17c2VsZi5icm9hZGNhc3RJdGVtQ2xpY2t9XHJcblx0XHRcdFx0XHRjdXJyZW50VXNlcj17c2VsZi5wcm9wcy5jdXJyZW50VXNlcn0vPlxyXG5cdFx0XHQpXHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBVc2Vyc0xpc3Q7XHJcbiIsInZhciBzdGF0ZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9tb2R1bGVzL3N0YXRlLW1hbmFnZXJcIik7XG52YXIgY29uZmlnID0gcmVxdWlyZShcIi4vY29tbW9uL2NvbmZpZ1wiKTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vY29tbW9uL3V0aWxcIik7XG5cbnZhciBVc2Vyc0xpc3QgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3VzZXJzLWxpc3RcIik7XG52YXIgVGl0bGUgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3RpdGxlXCIpO1xudmFyIERpYWxvZyA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZGlhbG9nXCIpO1xuXG52YXIgbW9ja1N0YXRlID0ge1xuXHRjdXJyZW50VXNlcjoge30sXG5cdHVzZXJzOiBbXG5cdFx0e25hbWU6IFwiSmVycnlcIiwgZ2VuZGVyOiAxfSxcblx0XHR7bmFtZTogXCJMaWx5XCIsIGdlbmRlcjogMH0sXG5cdFx0e25hbWU6IFwiVG9teVwiLCBnZW5kZXI6IDF9LFxuXHRcdHtuYW1lOiBcIkx1Y3lcIiwgZ2VuZGVyOiAwfSxcblx0XHR7bmFtZTogXCJSaWNoYWVsXCIsIGdlbmRlcjogMX0sXG5cdFx0e25hbWU6IFwiQXZyaWxcIiwgZ2VuZGVyOiAwfVxuXHRdXG59O1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBtb2NrU3RhdGU7XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcblx0XHR1dGlsLmxvZyhcIkFwcCBkaWQgbW91bnQhXCIpO1xuXHRcdHN0YXRlTWFuYWdlci5pbml0KHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8VGl0bGUgdGl0bGU9e2NvbmZpZy50aXRsZX0vPlxuXHRcdFx0XHQ8VXNlcnNMaXN0IHVzZXJzPXt0aGlzLnN0YXRlLnVzZXJzfSBjdXJyZW50VXNlcj17dGhpcy5zdGF0ZS5jdXJyZW50VXNlcn0vPlxuXHRcdFx0XHQ8RGlhbG9nIGN1cnJlbnRVc2VyPXt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pXG5cblJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbmV3IEV2ZW50RW1pdHRlcjI7IiwidmFyIGV2ZW50YnVzID0gcmVxdWlyZShcIi4vZXZlbnQtYnVzXCIpO1xyXG52YXIgYXBwO1xyXG5cclxuZnVuY3Rpb24gaW5pdChuZXdBcHApIHtcclxuXHRhcHAgPSBuZXdBcHA7XHJcblx0bGlzdGVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RlbigpIHtcclxuXHRldmVudGJ1cy5vbihcInVzZXJzLWxpc3Q6dXNlci1zZWxlY3RlZFwiLCBmdW5jdGlvbih1c2VyKSB7XHJcblx0XHRhcHAuc2V0U3RhdGUoe1xyXG5cdFx0XHRjdXJyZW50VXNlcjogdXNlclxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge2luaXQ6IGluaXR9O1xyXG4iXX0=
