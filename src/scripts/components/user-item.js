var UserItem = React.createClass({
	handlerItemClick: function() {
		if (this.props.onItemClick) {
			this.props.onItemClick(this.props.user);
		}
	},
	render: function() {
		var className = (this.props.currentUser == this.props.user)
			? "user-item active"
			: "user-item";
		return (
			<div className={className} onClick={this.handlerItemClick}>
				{this.props.user.name}
			</div>
		);
	}
});

module.exports = UserItem;
