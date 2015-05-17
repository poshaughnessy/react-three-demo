import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import ModelComponent from './model';

class RobotMechComponent extends ModelComponent {

    constructor(props) {

        super(props);

        this.displayName = 'Mech Robot';

        let loader = new THREE.JSONLoader();

        loader.load('/models/mech-robot/robot.js', (geometry, materials) => {

            console.log('Loaded Mech robot', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials );

        });

    }

}

export default RobotMechComponent;
