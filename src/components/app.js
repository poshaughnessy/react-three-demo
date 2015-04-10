import React from 'react';
import THREE from 'three';
import ReactTHREE from 'react-three';
import from '../../bower_components/threejs/examples/js/loaders/ColladaLoader';

console.log('THREE', THREE);
console.log('ColladaLoader', THREE.ColladaLoader);

class AppComponent extends React.Component {
    render() {
        return ReactTHREE.Object3D()
    }
}

export default AppComponent;