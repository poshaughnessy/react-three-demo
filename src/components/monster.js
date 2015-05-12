import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

class MonsterComponent extends React.Component {

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

    render() {

        return React.createElement(
            ReactTHREE.Object3D,
            {},
            React.createElement( ReactTHREE.Mesh, {
                geometry: this.geometry,
                material: this.material,
                position: this.props.position,
                scale: 0.04
            })
        );

    }

}

MonsterComponent.propTypes = {
    position: React.PropTypes.instanceOf(THREE.Vector3)
};

export default MonsterComponent;
