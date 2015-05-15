import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import ModelComponent from './model';

class RobotRobbyComponent extends ModelComponent {

    constructor(props) {

        super(props);

        this.displayName = 'Robby Robot';

        let loader = new THREE.JSONLoader();

        loader.load('/models/robby/RobbyTheRobot_FanArt.js', (geometry, materials) => {

            console.log('Loaded Robby robot', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials );

        });

    }

}

export default RobotRobbyComponent;
