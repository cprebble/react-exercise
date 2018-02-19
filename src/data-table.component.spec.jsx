import React from 'react';
import sinon from 'sinon';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import DataTableComponent from './data-table.component';
import testdata from '../test/testdata';

describe('DataTable Component', () => {
	it('warns if missing required data', () => {
		const stub = sinon.stub(console, 'error');
		const testcomp = <DataTableComponent title="test data"/>;
		shallow(testcomp);
		
		expect(stub.calledOnce).to.equal(true);
		// console.log("spyy",  stub.args)
        expect(stub.calledWithExactly(
			sinon.match('Warning: Failed prop type: The prop `data` is marked as required in `DataTableComponent`')
		)).to.equal(true);
	});

	it('renders title', () => {
		const testcomp = <DataTableComponent title="test data" data={testdata}/>;
		const wrapper = shallow(testcomp);
		const page = pageObject(wrapper);

		assert.equal(page.findDisplayedTitle(), 'test data');
	});
});

const pageObject = (component) => {
	return {
		findDisplayedTitle: () => component.find('#title').text()
	};
};
	