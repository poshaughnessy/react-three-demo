import React from 'react';
import ReactTHREE from 'react-three';

class RobotComponent extends React.Component {

    constructor(props) {

        super(props);

        this.displayName = 'Robot';

        this.state = {
            scene: null
        };

        /*
        let colladaLoader = new THREE.ColladaLoader();

        colladaLoader.load('/models/monster/monster.dae', collada => { //'/models/robby/RobbyTheRobot_FanArt.dae', collada => {

            console.log('result scene', collada.scene);

            this.setState({scene: collada.scene});

            this.props.onLoad();
        });
        */

        let loader = new THREE.JSONLoader();

        console.log('Loading...');

        loader.load('/models/robby/RobbyTheRobot_FanArt.js', (geometry, materials) => {

            console.log('Loaded!', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials );
        });

        //this.material = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
        //this.geometry = new THREE.BoxGeometry( 100, 100, 100 );

    }

    render() {

        /*
        if( this.state.scene ) {

            let children = [];

            for( let i=0; i < this.state.scene.children.length; i++ ) {

                var childObj = this.state.scene.children[i];

                children.push(
                    React.createElement( ReactTHREE.Mesh, {
                        geometry: childObj.geometry,

                    })
                );

            }

            return React.createElement(
                ReactTHREE.Object3D,
                {},
                children
            );

        } else {
        */

        return React.createElement(
            ReactTHREE.Object3D,
            {},
            React.createElement( ReactTHREE.Mesh, {
                geometry: this.geometry,
                material: this.material,
                position: this.props.position || new THREE.Vector3(0,0,0),
                scale: 5
            })
        );

    }

}


console.log('THREE', THREE);


RobotComponent.propTypes = {
    position: React.PropTypes.instanceOf(THREE.Vector3)
};

export default RobotComponent;
