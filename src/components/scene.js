import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import Constants from '../constants';
import RobotComponent from './models/robot';
import DinosaurComponent from './models/dinosaur';

const MODEL_SPIN_RATE = 0.01,
      ROBOT_Y_ADJUST = -10,
      DINOSAUR_Y_ADJUST = 20;

class SceneComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            modelPosition: new THREE.Vector3(0,-20,0),
            modelRotation: 0
        };

        this.modelMovingForwards = true;

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
        let robotPosition = new THREE.Vector3( x, y + ROBOT_Y_ADJUST, z ),
            dinosaurPosition = new THREE.Vector3( x, y + DINOSAUR_Y_ADJUST, z );

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
                position: new THREE.Vector3(0, 0, 100),
                lookat: new THREE.Vector3(0, 0, 0)
            }
        );

        let RobotElement = React.createElement(
            RobotComponent,
            {
                position: robotPosition,
                quaternion: modelQuaternion,
                visible: (this.props.model === Constants.MODEL.ROBOT),
                scale: 8
            }
        );

        let DinosaurElement = React.createElement(
            DinosaurComponent,
            {
                position: dinosaurPosition,
                quaternion: modelQuaternion,
                visible: (this.props.model === Constants.MODEL.DINOSAUR),
                scale: 7
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
            DinosaurElement,
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

    /*
    _animateForwardsAndBack() {

        let modelZ = this.state.modelPosition.z;

        if( this.modelMovingForwards ) {

            if( modelZ < MODEL_Z_NEAR ) {
                let newPos = this.state.modelPosition;
                newPos.z += MODEL_MOVE_RATE;
                this.setState({modelPosition: newPos});
            } else {
                this.modelMovingForwards = false;
            }

        } else {

            if( modelZ > MODEL_Z_FAR ) {
                let newPos = this.state.modelPosition;
                newPos.z -= MODEL_MOVE_RATE;
                this.setState({modelPosition: newPos});
            } else {
                this.modelMovingForwards = true;
            }

        }


    }
    */

    _animateSpin() {

        this.setState({modelRotation: this.state.modelRotation +
            (this.props.animation === Constants.ANIMATION.SPIN_LEFT ? MODEL_SPIN_RATE : -MODEL_SPIN_RATE)});

    }

}

export default SceneComponent;
