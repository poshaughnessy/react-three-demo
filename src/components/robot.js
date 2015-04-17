import React from 'react';
import ReactTHREE from 'react-three';

// TODO put ES6 style back when react-three is upgraded to React v0.13 (https://github.com/Izzimach/react-three/issues/16)
//class AppComponent extends React.Component {
let AppComponent = React.createClass({

    displayName: 'Robot',

    propTypes: {
        position: React.PropTypes.instanceOf(THREE.Vector3)
    },

    render: function() {

        // TODO move out of render?
        colladaLoader.load('/models/robby/RobbyTheRobot_FanArt.dae', function() {

        });

        return React.createElement(
            ReactTHREE.Mesh,
            {
                position: this.props.position || new THREE.Vector3(0, 0, 0)
                //geometry: ,
                //material:
            }

        )
    }

});