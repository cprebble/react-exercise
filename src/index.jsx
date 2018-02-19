import React from 'react';
import ReactDOM from 'react-dom';
import DataAppComponent from './data-app.component';

const rdiv = document.createElement('div');
document.body.appendChild(rdiv); 
ReactDOM.render(<DataAppComponent />, rdiv);