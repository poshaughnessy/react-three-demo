import React from 'react';
import AppComponent from './components/app';

let tempY = 0;

let appState = { history: true, robotPosition: new THREE.Vector3(0,0,0) }

function animate() {
    tempY++;
    appState.robotPosition.y = tempY;
    React.render(
        React.createElement( AppComponent, appState ),
        document.getElementById('app')
    );
  
    requestAnimationFrame(animate);
}

animate();
