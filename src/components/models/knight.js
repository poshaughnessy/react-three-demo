import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import SkinnedModelComponent from './skinnedModel';

class KnightComponent extends SkinnedModelComponent {

    constructor(props) {

        super(props);

        this.displayName = 'Knight';

        let loader = new THREE.JSONLoader();

        loader.load('/models/knight/knight.js', (geometry, materials) => {

            console.log('Loaded knight', geometry, materials);

            for ( var i = 0; i < materials.length; i ++ ) {

                var m = materials[ i ];
                m.skinning = true;
                m.morphTargets = true;
                m.specular.setHSL( 0, 0, 0.1 );
                m.color.setHSL( 0.6, 0, 0.6 );
                m.wrapAround = true;

            }

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials );

        });

    }

}

export default KnightComponent;
