import React from 'react';
import AppComponent from './components/app';
import THREE from 'three';

const ROBOT_Z_NEAR = 50;
const ROBOT_Z_FAR = 0;
const ROBOT_MOVE_RATE = 0.1;

let appProps = { robotPosition: new THREE.Vector3(0,-30,0), robotMovingForwards: true };

function animate() {

    let robotZ = appProps.robotPosition.z;

    if( appProps.robotMovingForwards ) {


        if( robotZ < ROBOT_Z_NEAR ) {
            appProps.robotPosition.z += ROBOT_MOVE_RATE;
        } else {
            appProps.robotMovingForwards = false;
        }

    } else {

        if( robotZ > ROBOT_Z_FAR ) {
            appProps.robotPosition.z -= ROBOT_MOVE_RATE;
        } else {
            appProps.robotMovingForwards = true;
        }

    }

    React.render(
        React.createElement( AppComponent, appProps ),
        document.getElementById('app')
    );
  
    requestAnimationFrame(animate);
}

animate();
