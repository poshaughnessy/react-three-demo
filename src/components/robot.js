import React from 'react';
import ReactTHREE from 'react-three';

class RobotComponent extends React.Component {

    constructor() {

        this.displayName = 'Robot';

        let colladaLoader = new THREE.ColladaLoader();

        let self = this;

        colladaLoader.load('/models/robby/RobbyTheRobot_FanArt.dae', function( geometry ) {

            console.log('self', self);
            console.log('geometry', geometry);

            self.state = {geometry: geometry};
        });

    }

    render() {

        if( this.state ) {

            return React.createElement(
                ReactTHREE.Mesh,
                {
                    position: this.props.position || new THREE.Vector3(0, 0, 0),
                    geometry: this.state ? this.state.geometry : null,
                    material: new THREE.MeshFaceMaterial()
                }

            );

        } else {
            return null;
        }


    }

}

RobotComponent.propTypes = {
    position: React.PropTypes.instanceOf(THREE.Vector3)
};

export default RobotComponent;
