import React from 'react';
import ReactTHREE from 'react-three';

class RobotComponent extends React.Component {

    constructor(props) {

        super(props);

        this.displayName = 'Robot';

        this.state = {
            model: null
        };

        // TODO put back when I figure this out
        /*
        let colladaLoader = new THREE.ColladaLoader();

        let self = this;

        colladaLoader.load('/models/robby/RobbyTheRobot_FanArt.dae', function( collada ) {

            console.log('self', self);
            console.log('result', collada);

            self.setState({scene: collada.scene});

            console.log('self.props', self.props);

            self.props.onLoad();
        });
        */

        this.texture = THREE.ImageUtils.loadTexture( '../../models/cupCake.png' );
        this.material = new THREE.MeshBasicMaterial({ map: this.texture });
        this.geometry = new THREE.BoxGeometry( 100, 100, 100 );

    }

    render() {


        return React.createElement(
            ReactTHREE.Object3D,
            {position: new THREE.Vector3(0,0,0)},
            React.createElement( ReactTHREE.Mesh, {geometry: this.geometry, material: this.material} )
        );

        // TODO put back when I figure this out
        /*
        if( this.state.model ) {

            return React.createElement(
                ReactTHREE.Mesh,
                {
                    position: this.props.position || new THREE.Vector3(0, 0, 0),
                    geometry: this.state.scene.geometry ? this.state.scene.geometry : new THREE.Geometry(),
                    material: this.state.scene.material ? this.state.scene.material : new THREE.MeshFaceMaterial()
                }

            );

        } else {
            return React.createElement(ReactTHREE.Object3D);
        }
        */

    }

}

RobotComponent.propTypes = {
    position: React.PropTypes.instanceOf(THREE.Vector3)
};

export default RobotComponent;
