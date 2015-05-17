import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import ModelComponent from './model';

class RobotLittleComponent extends ModelComponent {

    constructor(props) {

        super(props);

        this.displayName = 'Little Robot';

        let loader = new THREE.JSONLoader();

        loader.load('/models/little-robot/robot.js', (geometry, materials) => {

            console.log('Loaded Little robot', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials );

        });

    }

}

export default RobotLittleComponent;
