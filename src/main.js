import React from 'react';
import AppComponent from './components/app';

React.render(
    React.createElement( AppComponent, {history: true} ),
    document.getElementById('app')
);
