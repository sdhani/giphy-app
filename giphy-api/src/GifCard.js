import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GifCard extends Component {
	render() {
		return (
			<div>
				<p>
					<img src={this.props.aGif}></img>
				</p>
			</div>
		);
	}
}

GifCard.propTypes = {
	aGif: PropTypes.string,
}

export default GifCard;