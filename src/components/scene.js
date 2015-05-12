import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import Constants from '../constants';
import RobotComponent from './robot';
import MonsterComponent from './monster';

const MODEL_Z_NEAR = 50;
const MODEL_Z_FAR = 0;
const MODEL_MOVE_RATE = 0.1;

const ROBOT_Y_ADJUST = -10;
const MONSTER_X_ADJUST = -40;

class SceneComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            modelPosition: new THREE.Vector3(0,-20,0),
            modelMovingForwards: true
        };

        this._animate = this._animate.bind(this);
    }

    componentDidMount() {

        // Kick off animation
        this._animate();

    }

    render() {

        let x = this.state.modelPosition.x;
        let y = this.state.modelPosition.y;
        let z = this.state.modelPosition.z;

        // Adjust relative positions
        let robotPosition = new THREE.Vector3( x, y + ROBOT_Y_ADJUST, z );
        let monsterPosition = new THREE.Vector3( x + MONSTER_X_ADJUST, y, z );

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
                position: robotPosition
            }
        );

        let MonsterElement = React.createElement(
            MonsterComponent,
            {
                position: monsterPosition
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

        let ModelElement = null;

        if( this.props.model === Constants.MODEL.ROBOT ) {
            ModelElement = RobotElement;
        } else if( this.props.model === Constants.MODEL.MONSTER ) {
            ModelElement = MonsterElement;
        }

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
            ModelElement,
            AmbientLight,
            DirectionalLight,
            SpotLight
        )
    }

    _animate() {

        let modelZ = this.state.modelPosition.z;

        if( this.state.modelMovingForwards ) {

            if( modelZ < MODEL_Z_NEAR ) {
                let newPos = this.state.modelPosition;
                newPos.z += MODEL_MOVE_RATE;
                this.setState({modelPosition: newPos});
            } else {
                this.setState({modelMovingForwards: false});
            }

        } else {

            if( modelZ > MODEL_Z_FAR ) {
                let newPos = this.state.modelPosition;
                newPos.z -= MODEL_MOVE_RATE;
                this.setState({modelPosition: newPos});
            } else {
                this.setState({modelMovingForwards: true});
            }

        }

        requestAnimationFrame(this._animate);

    }

}

export default SceneComponent;
