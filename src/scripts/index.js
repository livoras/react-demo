var stateManager = require("./modules/state-manager");
var config = require("./common/config");
var util = require("./common/util");

var UsersList = require("./components/users-list");
var Title = require("./components/title");
var Dialog = require("./components/dialog");

var mockState = {
	currentUser: {},
	users: [
		{name: "Jerry", gender: 1},
		{name: "Lily", gender: 0},
		{name: "Tomy", gender: 1},
		{name: "Lucy", gender: 0},
		{name: "Richael", gender: 1},
		{name: "Avril", gender: 0}
	]
};

var App = React.createClass({
	getInitialState: function() {
		return mockState;
	},
	componentDidMount: function() {
		util.log("App did mount!");
		stateManager.init(this);
	},
	render: function() {
		return (
			<div>
				<Title title={config.title}/>
				<UsersList users={this.state.users} currentUser={this.state.currentUser}/>
				<Dialog currentUser={this.state.currentUser}/>
			</div>
		)
	}
})

React.render(<App/>, document.getElementById("app"));
