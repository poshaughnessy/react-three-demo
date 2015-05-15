import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import ModelComponent from './model';

class RobotRetroComponent extends ModelComponent {

    constructor(props) {

        super(props);

        this.displayName = 'Retro Robot';

        let loader = new THREE.JSONLoader();

        loader.load('/models/retro-robot/retro_robot.js', (geometry, materials) => {

            console.log('Loaded Retro robot', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials );

        });

    }

}

export default RobotRetroComponent;
