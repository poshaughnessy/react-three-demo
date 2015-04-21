import React from 'react';
import AppComponent from './components/app';

let tempY = 0;

let app = React.render(
    React.createElement( AppComponent, {history: true} ),
    document.getElementById('app')
);

function animate() {
    tempY++;
    app.props.robotPosition = new THREE.Vector3(0, tempY, 0);
    app.render();
    requestAnimationFrame(animate);
}

animate();
