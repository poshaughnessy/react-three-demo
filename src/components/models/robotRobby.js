import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

class RobotRobbyComponent extends React.Component {

    constructor(props) {

        super(props);

        this.displayName = 'Robby Robot';

        let loader = new THREE.JSONLoader();

        loader.load('/models/robby-robot/RobbyTheRobot_FanArt.js', (geometry, materials) => {

            console.log('Loaded Robby robot', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials );

        });

    }

    render() {

        return React.createElement( ReactTHREE.Mesh, {
            geometry: this.geometry,
            material: this.material,
            position: this.props.position,
            quaternion: this.props.quaternion,
            visible: this.props.visible,
            scale: this.props.scale
        });

    }

}

RobotRobbyComponent.propTypes = {
    scale: React.PropTypes.number,
    position: React.PropTypes.instanceOf(THREE.Vector3),
    quaternion: React.PropTypes.instanceOf(THREE.Quaternion),
    visible: React.PropTypes.bool
};

export default RobotRobbyComponent;
