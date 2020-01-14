import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component{
	constructor(props) {
		super(props);
	}

	renderWeather(cityData) {
		const name = cityData.city.name;
		
		return (
			<tr key={name}>
				<td>{name}</td>
			</tr>
		);
	}

	render(){
		return(
		   	<table className="table table-hover">
		   		<thead>
		   			<tr>
		   				<th>City<span>🏙</span></th>
		   				<th>Temperature<span>🌡</span></th>
		   				<th>Pressure<span>🌬</span></th>
		   				<th>Humidity<span>💧</span></th>
		   			</tr>
		   		</thead>
		   		<tbody>
		   			{ this.props.weather.map(this.renderWeather) }
		   		</tbody>
		   	</table>
		);
	}
}


function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);

// Next: Adding sparkling chart.