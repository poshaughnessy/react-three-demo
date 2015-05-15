import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import ModelComponent from './model';

class RobotRadarComponent extends ModelComponent {

    constructor(props) {

        super(props);

        this.displayName = 'Robot';

        let loader = new THREE.JSONLoader();

        loader.load('/models/retro-robot/retro_robot.js', (geometry, materials) => {

            console.log('Loaded Radar robot', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials );

        });

    }

}

export default RobotRadarComponent;
