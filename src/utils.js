import Data from '../data.json';

export function getData() {
	const promiseData = fetch(Data)
		.then(response => response.json());
	return promiseData;
}