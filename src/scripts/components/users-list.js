var UserItem = require("./user-item");
var eventbus = require("../modules/event-bus");

var UsersList = React.createClass({
	broadcastItemClick: function(user) {
		eventbus.emit("users-list:user-selected", user);
	},
	render: function() {
		return (
			<div className="users-list">
				<h2>用户列表</h2>
				<hr/>
				{this.renderList()}
			</div>
		);
	},
	renderList: function() {
		var self = this;
		return this.props.users.map(function(user) {
			return (
				<UserItem 
					user={user} 
					key={user.name} 
					onItemClick={self.broadcastItemClick}
					currentUser={self.props.currentUser}/>
			)
		});
	}
});

module.exports = UsersList;
