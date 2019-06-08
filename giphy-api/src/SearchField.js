import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GifCard from './GifCard.js'

class SearchField extends Component {
	constructor(props){
		super(props);
		this.state = {
			apiKey: 'bCXHzMQejcklZMVwGQCBAfZy4mQ3AO2H',
			regularSearch: 'http:/\//api.giphy.com/v1/gifs/search?q=',
			trendingSearch: 'http:/\//api.giphy.com/v1/gifs/trending?api_key=',
			randomSearch: ' http:/\//api.giphy.com/v1/gifs/random?api_key=',
			url: '',
			gif:[]
		}
	}

	componentDidMount () {
		axios.get(this.state.trendingSearch + this.state.apiKey)
		.then(res => {
			this.setState({
				gif: res.data.data
			})
		})
	}

	handleSubmit = (event) => {
		axios.get(this.state.url)
		.then(res => {
			this.setState({
				gif: res.data.data
			})
		})
	}

	handleSearch = (event) => {
		if(event.target.value === 'trending'){
			this.setState({
				url: this.state.trendingSearch + this.state.apiKey
			})

		}else if(event.target.value === 'random'){
			this.setState({
				url: this.state.randomSearch + this.state.apiKey
			})

		}else {
			this.setState({
				url: this.state.regularSearch + event.target.value + '&api_key=' + this.state.apiKey
			})
		}		
	}

	render(){
		console.log(this.state);
		return (
			<div>
				

				<h2>GIPHY Search</h2>
				<input type="text" value={this.state.search} onChange={this.handleSearch}/>
				<button onClick = {this.handleSubmit}> Search </button>
				<div>{
					this.state.gif && this.state.gif.map(obj => {
						console.log(obj.images);
						return <GifCard aGif = {obj.images.downsized.url}/>
					})
				}</div>

			</div>
			);
	}
};

SearchField.propTypes = {
	apiKey: PropTypes.string,
	url: PropTypes.string,
	gif: PropTypes.string,
	search: PropTypes.string,
	regularSearch: PropTypes.string,
	trendingSearch: PropTypes.string,
	randomSearch: PropTypes.string
}

export default SearchField;