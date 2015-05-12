import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

class ModelComponent extends React.Component {

    render() {

        console.log('this.props', this.props, this.displayName);

        return React.createElement( ReactTHREE.Mesh, {
            geometry: this.geometry,
            material: this.material,
            position: this.props.position,
            visible: this.props.visible,
            scale: this.props.scale
        });

    }

}

ModelComponent.propTypes = {
    scale: React.PropTypes.number,
    position: React.PropTypes.instanceOf(THREE.Vector3),
    visible: React.PropTypes.bool
};

export default ModelComponent;
