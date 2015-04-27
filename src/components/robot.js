import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

class RobotComponent extends React.Component {

    constructor(props) {

        super(props);

        this.displayName = 'Robot';

        let loader = new THREE.JSONLoader();

        console.log('Loading...');

        // '/models/robby/RobbyTheRobot_FanArt.js'
        // '/models/monster/monster.js'
        loader.load('/models/robby/RobbyTheRobot_FanArt.js', (geometry, materials) => {

            console.log('Loaded!', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials ); // Use materials[0] for the monster

        });

        // For testing

        /*
        let texture = THREE.ImageUtils.loadTexture('/models/cupCake.png');
        this.material = new THREE.MeshBasicMaterial({ map: texture }); // color: 0xFF000
        this.geometry = new THREE.BoxGeometry( 8, 8, 8 );
        */

    }

    render() {

        return React.createElement(
            ReactTHREE.Object3D,
            {},
            React.createElement( ReactTHREE.Mesh, {
                geometry: this.geometry,
                material: this.material,
                position: this.props.position || new THREE.Vector3(0,0,0),
                scale: 8 // Use 0.001 for the monster
            })
        );

    }

}


console.log('THREE', THREE);


RobotComponent.propTypes = {
    position: React.PropTypes.instanceOf(THREE.Vector3)
};

export default RobotComponent;
