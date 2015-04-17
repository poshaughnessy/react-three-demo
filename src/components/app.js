import React from 'react';
import ReactTHREE from 'react-three';
//import RobotComponent from './robot';

class AppComponent extends React.Component {

    render() {

        let CameraElement = React.createElement(
            ReactTHREE.PerspectiveCamera,   // type
            {                               // config
                name: 'camera',
                fov: 75,
                aspect: 800/600,
                near: 1,
                far: 1000,
                position: new THREE.Vector3(0, 0, 600),
                lookat: new THREE.Vector3(0, 0, 0)
            }
        );

        return React.createElement(
            ReactTHREE.Scene,       // type
            {                       // config
                width: 800,
                height: 600,
                camera: 'camera'
            },
            CameraElement//,          // children
            //React.createElement(RobotComponent)     // TODO add props data
        )
    }

};

export default AppComponent;