import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';


class WeatherList extends Component{
	constructor(props) {
		super(props);
	}

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temp = cityData.list.map(weather => weather.main.temp);
		console.log(temp)
		
		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Sparklines data={temp} width={180} height={20}>
						<SparklinesLine color='green' />
						<SparklinesSpots />
					</Sparklines>
				</td>
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