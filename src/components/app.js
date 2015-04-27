import React from 'react';
import ReactTHREE from 'react-three';
import RobotComponent from './robot';
import THREE from 'three';

class AppComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            robotLoaded: false
        };

        this.onRobotLoaded = this.onRobotLoaded.bind(this);
    }

    render() {

        let CameraElement = React.createElement(
            ReactTHREE.PerspectiveCamera,   // type
            {                               // config
                name: 'camera',
                fov: 75,
                aspect: window.innerWidth / window.innerHeight,
                near: 1,
                far: 1000,
                position: new THREE.Vector3(0, 0, 100),
                lookat: new THREE.Vector3(0, 0, 0)
            }
        );

        let RobotElement = React.createElement(
            RobotComponent,
            {
                onLoad: this.onRobotLoaded,
                position: this.props.robotPosition || new THREE.Vector3(0,0,0)
            }
        );

        let AmbientLight = React.createElement(
            ReactTHREE.AmbientLight,
            {
                color: new THREE.Color(0x333333),
                intensity: 0.5,
                position: new THREE.Vector3(0, 0, 600),
                target: new THREE.Vector3(0, 0, 0)
            }
        );

        let DirectionalLight = React.createElement(
            ReactTHREE.DirectionalLight,
            {
                color: new THREE.Color(0xFFFFFF),
                intensity: 1.5,
                position: new THREE.Vector3(0, 0, 60)
            }
        );

        let SpotLight = React.createElement(
            ReactTHREE.SpotLight,
            {
                position: new THREE.Vector3(0, 0, 100)
            }
        );

        return React.createElement(
            ReactTHREE.Scene,
            {
                width: window.innerWidth,
                height: window.innerHeight,
                camera: 'camera',
                antialias: true,
                background: 0xFFFFFF
            },
            CameraElement,
            RobotElement,
            AmbientLight,
            DirectionalLight,
            SpotLight
        )
    }

    onRobotLoaded() {
        this.setState({robotLoaded: true});
    }
}

AppComponent.propTypes = {
    robotPosition: React.PropTypes.instanceOf(THREE.Vector3)
};

export default AppComponent;
