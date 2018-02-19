
import React from 'react';
import DataTableComponent from './data-table.component';
import Data from '../data.json';

class DataAppComponent extends React.Component {
	componentDidMount() {
		this.setState({ data: Data });
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'start',
				alignItems: 'start'
			}}>
				<DataTableComponent title="Some JSON Data" data={this.state.data}/>
			</div>
		)
	}
}

export default DataAppComponent;
