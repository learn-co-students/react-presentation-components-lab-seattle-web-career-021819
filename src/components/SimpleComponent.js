// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
	constructor() {
		super()
		this.state = {
			mood: "happy"
		}
	}

	onDivClick = e => {
		this.state.mood === "happy" ?
			this.setState({
				mood: "sad"
			})
			:
			this.setState({
				mood: 'happy'
			})
	}

	render() {
		return (
			<div onClick={this.onDivClick}>
				{this.state.mood}
			</div>
		)
	}
}

export default SimpleComponent;