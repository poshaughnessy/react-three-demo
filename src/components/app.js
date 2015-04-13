import React from 'react';
//import THREE from 'three';

//global.THREE = THREE;

//import ReactTHREE from 'react-three';
//import ColladaLoader from '../../bower_components/threejs/examples/js/loaders/ColladaLoader';

console.log('React', React);
console.log('React.Component', React.Component);

console.log('THREE', THREE);
console.log('THREE.ColladaLoader', THREE.ColladaLoader);

class AppComponent extends React.Component {
    render() {
        return (
            <h1>Hello</h1>
        );//ReactTHREE.Object3D()
    }
}

export default AppComponent;