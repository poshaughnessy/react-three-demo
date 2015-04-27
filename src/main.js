import React from 'react';
import AppComponent from './components/app';
import THREE from 'three';

const ROBOT_Z_NEAR = 50;
const ROBOT_Z_FAR = 0;
const ROBOT_MOVE_RATE = 0.1;

let appState = { history: true, robotPosition: new THREE.Vector3(0,-30,0), robotMovingForwards: true };

function animate() {

    let robotZ = appState.robotPosition.z;

    if( appState.robotMovingForwards ) {


        if( robotZ < 50 ) {
            appState.robotPosition.z += ROBOT_MOVE_RATE;
        } else {
            appState.robotMovingForwards = false;
        }

    } else {

        if( robotZ > 0 ) {
            appState.robotPosition.z -= ROBOT_MOVE_RATE;
        } else {
            appState.robotMovingForwards = true;
        }

    }

    React.render(
        React.createElement( AppComponent, appState ),
        document.getElementById('app')
    );
  
    requestAnimationFrame(animate);
}

animate();
