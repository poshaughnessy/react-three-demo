import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import ModelComponent from './model';

class MonsterComponent extends ModelComponent {

    constructor(props) {

        super(props);

        this.displayName = 'Monster';

        let loader = new THREE.JSONLoader();

        loader.load('/models/monster/monster.js', (geometry, materials) => {

            console.log('Loaded monster', geometry, materials);

            this.geometry = geometry;
            this.material = materials[0];

        });

    }

}


console.log('MonsterComponent', MonsterComponent);

export default MonsterComponent;
