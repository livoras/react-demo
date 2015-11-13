var Dialog = React.createClass({
	render: function() {
		if (this.props.currentUser.name) {
			return (
				<div>
					<hr/>
					<div>正在和 {this.props.currentUser.name} 聊天</div>
					{this.renderTextarea()}
				</div>
			)
		} else {
			return (
				<div>
					<hr/>
					<div>没有选择用户~</div>
				</div>
			)
		}
	},
	renderTextarea: function() {
		return (
			<div>
				<textarea></textarea>
				<button>Send</button>
			</div>
		);
	}
});

module.exports = Dialog;
