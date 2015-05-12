import React from 'react';
import ReactTHREE from 'react-three';
import RobotComponent from './robot';
import THREE from 'three';

const ROBOT_Z_NEAR = 50;
const ROBOT_Z_FAR = 0;
const ROBOT_MOVE_RATE = 0.1;

class SceneComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            robotLoaded: false,
            robotPosition: new THREE.Vector3(0,-30,0),
            robotMovingForwards: true
        };

        this._animate = this._animate.bind(this);
        this._onRobotLoaded = this._onRobotLoaded.bind(this);
    }

    componentDidMount() {

        // Kick off animation
        this._animate();

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
                onLoad: this._onRobotLoaded,
                position: this.state.robotPosition || new THREE.Vector3(0,0,0)
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
                background: 0xEEEEEE
            },
            CameraElement,
            RobotElement,
            AmbientLight,
            DirectionalLight,
            SpotLight
        )
    }

    _animate() {

        let robotZ = this.state.robotPosition.z;

        if( this.state.robotMovingForwards ) {

            if( robotZ < ROBOT_Z_NEAR ) {
                let newPos = this.state.robotPosition;
                newPos.z += ROBOT_MOVE_RATE;
                this.setState({robotPosition: newPos});
            } else {
                this.setState({robotMovingForwards: false});
            }

        } else {

            if( robotZ > ROBOT_Z_FAR ) {
                let newPos = this.state.robotPosition;
                newPos.z -= ROBOT_MOVE_RATE;
                this.setState({robotPosition: newPos});
            } else {
                this.setState({robotMovingForwards: true});
            }

        }

        requestAnimationFrame(this._animate);

    }

    _onRobotLoaded() {
        this.setState({robotLoaded: true});
    }
}

export default SceneComponent;
