import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import Constants from '../constants';
import RobotRobbyComponent from './models/robotRobby';
import RobotRetroComponent from './models/robotRetro';

const MODEL_SPIN_RATE = 0.01,
      ROBOT_ROBBY_Y = -25,
      ROBOT_RETRO_Y = -25;

class SceneComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            modelPosition: new THREE.Vector3(0,0,0),
            modelRotation: 0
        };

        this._animate = this._animate.bind(this);
        this._animateSpin = this._animateSpin.bind(this);
    }

    componentDidMount() {

        // Kick off animation
        this._animate();

    }

    render() {

        let x = this.state.modelPosition.x,
            y = this.state.modelPosition.y,
            z = this.state.modelPosition.z;

        // Adjust relative positions
        let robotRobbyPosition = new THREE.Vector3( x, ROBOT_ROBBY_Y, z ),
            robotRetroPosition = new THREE.Vector3( x, ROBOT_RETRO_Y, z );

        let modelEuler = new THREE.Euler(0, this.state.modelRotation),
            modelQuaternion = new THREE.Quaternion().setFromEuler(modelEuler);

        let CameraElement = React.createElement(
            ReactTHREE.PerspectiveCamera,   // type
            {                               // config
                name: 'camera',
                fov: 75,
                aspect: window.innerWidth / window.innerHeight,
                near: 1,
                far: 1000,
                position: new THREE.Vector3(0, 0, 50),
                lookat: new THREE.Vector3(0, 0, 0)
            }
        );

        let RobotRobbyElement = React.createElement(
            RobotRobbyComponent,
            {
                position: robotRobbyPosition,
                quaternion: modelQuaternion,
                visible: (this.props.model === Constants.MODEL.ROBOT_ROBBY),
                scale: 7
            }
        );

        let RobotRetroElement = React.createElement(
            RobotRetroComponent,
            {
                position: robotRetroPosition,
                quaternion: modelQuaternion,
                visible: (this.props.model === Constants.MODEL.ROBOT_RETRO),
                scale: 8
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
            RobotRobbyElement,
            RobotRetroElement,
            AmbientLight,
            DirectionalLight,
            SpotLight
        )
    }

    _animate() {

        if( this.props.animation === Constants.ANIMATION.SPIN_LEFT ||
            this.props.animation === Constants.ANIMATION.SPIN_RIGHT ) {

            this._animateSpin();

        }

        requestAnimationFrame(this._animate);

    }

    _animateSpin() {

        this.setState({modelRotation: this.state.modelRotation +
            (this.props.animation === Constants.ANIMATION.SPIN_LEFT ? MODEL_SPIN_RATE : -MODEL_SPIN_RATE)});

    }

}

export default SceneComponent;
