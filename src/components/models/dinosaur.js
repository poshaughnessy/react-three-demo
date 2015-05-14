import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import ModelComponent from './model';

class DinosaurComponent extends ModelComponent {

    constructor(props) {

        super(props);

        this.displayName = 'Dinosaur';

        let loader = new THREE.JSONLoader();

        loader.load('/models/dinosaur/baby_dino.js', (geometry, materials) => {

            console.log('Loaded dinosaur', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials );

        });

    }

}

export default DinosaurComponent;
