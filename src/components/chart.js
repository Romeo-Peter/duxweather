import React, { Component } from 'react';
import _ from 'lodash';
import { 
	Sparklines, 
	SparklinesLine, 
	SparklinesSpots,
	SparklinesReferenceLine 
} from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

const Chart = (props) => {
	return(
		<div>
			<Sparklines data={props.data} width={props.width} height={props.height}>
				<SparklinesLine color={props.color} />
				<SparklinesSpots />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>Avg: {average(props.data)} {props.units}</div>
		</div>
	);
}

export default Chart;