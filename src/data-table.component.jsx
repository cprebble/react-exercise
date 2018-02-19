import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DataTableComponent extends Component {
	static propTypes = {
		data: PropTypes.array,
		title: PropTypes.string
	};

	render() {
		const { data, title } = this.props;
		const headers = Object.keys(data[0]);
		console.log("chart data", headers)
		const displayData = [data[0]];
		return (
			<div style={{
				padding: 12
			}}>
				<div style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</div>
				<table style={{ width: '40%' }}>
					<thead>
						<tr>
							{headers.map((header, ii) => {
								return <th key={ii}>{header}</th>
							})}
						</tr>
					</thead>
					<tbody>
						{displayData.map((row, ii) => {
							let rdisplay = <td>{row}</td>;
							if (row instanceof Object) {
								// TODO further render
								rdisplay = <td>{JSON.stringify(row)}</td>
							}
							return (
								<tr key={ii} style={{ lineHeight: '20px' }}>
									{rdisplay}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}