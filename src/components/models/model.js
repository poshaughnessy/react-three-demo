import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

class ModelComponent extends React.Component {

    render() {

        return React.createElement( ReactTHREE.Mesh, {
            geometry: this.geometry,
            material: this.material,
            position: this.props.position,
            quaternion: this.props.quaternion,
            visible: this.props.visible,
            scale: this.props.scale
        });

    }

}

ModelComponent.propTypes = {
    scale: React.PropTypes.number,
    position: React.PropTypes.instanceOf(THREE.Vector3),
    quaternion: React.PropTypes.instanceOf(THREE.Quaternion),
    visible: React.PropTypes.bool
};

export default ModelComponent;
