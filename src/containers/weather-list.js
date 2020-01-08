import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component{
 render(){
  return(
   	<table className="table table-hover">
   		<thead>
   			<tr>
   				<th>City</th>
   				<th>Temperature</th>
   				<th>Pressure</th>
   				<th>Humidity</th>
   			</tr>
   		</thead>
   		<tbody>
   			<tr>
   				<td>Abuja</td>
   				<td>16 deg</td>
   				<td>34232.2</td>
   				<td>🙅🏿‍♂️</td>
   			</tr>
   		</tbody>
   	</table>
  );
 }
}


function mapStateToProps({weather}) {
	return { weather };
}

export default connect(mapStateToProps, null)(WeatherList);