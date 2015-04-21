import React from 'react';
import ReactTHREE from 'react-three';
import RobotComponent from './robot';

class AppComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            robotLoaded: false
        };

        this.onRobotLoaded.bind(this);

    }

    render() {

        let CameraElement = React.createElement(
            ReactTHREE.PerspectiveCamera,   // type
            {                               // config
                name: 'camera',
                fov: 75,
                aspect: 800 / 600,
                near: 1,
                far: 1000,
                position: new THREE.Vector3(0, 0, 600),
                lookat: new THREE.Vector3(0, 0, 0)
            }
        );

        console.log('robot loaded', this.state.robotLoaded);

        let RobotElement = React.createElement(
            RobotComponent,     // type
            {
                onLoad: this.onRobotLoaded.bind(this)
            }
        );

        return React.createElement(
            ReactTHREE.Scene,       // type
            {                       // config
                width: 800,
                height: 600,
                camera: 'camera',
                antialias: true,
                background: 0xFFFFFF
            },
            CameraElement,
            RobotElement
        )
    }

    onRobotLoaded() {

        console.log('this', this);

        this.setState({robotLoaded: true});

    }

}

export default AppComponent;