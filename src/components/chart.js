import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const Chart = (props) => {
	return(
		<div>
			<Sparklines data={props.temp} width={props.width} height={props.height}>
				<SparklinesLine color={props.color} />
				<SparklinesSpots />
			</Sparklines>
		</div>
	);
}

export default Chart;