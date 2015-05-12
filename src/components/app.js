import React from 'react';
import THREE from 'three';
import ReactTHREE from 'react-three';
import ControlsComponent from './controls';
import SceneComponent from './scene';

class AppComponent extends React.Component {

    render() {

        console.log('App component render');

        return (
            <div>
                <ControlsComponent/>
                <SceneComponent/>
            </div>
        );

    }

}

export default AppComponent;
