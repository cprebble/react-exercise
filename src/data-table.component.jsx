import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DataTableComponent extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		title: PropTypes.string
	};

	render() {
		const { data, title } = this.props;
		const headers = Object.keys(data[0]);
		return (
			<div style={{
				padding: 12
			}}>
				<div id="title" style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</div>
				<table style={{ width: '40%' }}>
					<thead>
						<tr>
							{headers.map((header, ii) => {
								return <th key={`header${ii}`}>{header}</th>
							})}
						</tr>
					</thead>
					<tbody>
						{data.map((row, ii) => {
							const keys = Object.keys(row);
							return keys.map(k => {
								const thisVal = row[k];
								let displayedVal = <td>{thisVal}</td>;
								if (thisVal instanceof Object) {
									displayedVal = <td>{JSON.stringify(thisVal)}</td>
								}
								return (
									<tr key={`data${ii}${k}`} style={{ lineHeight: '20px' }}>
										{displayedVal}
									</tr>
								);
							});
						})}
					</tbody>
				</table>
			</div>
		);
	}
}