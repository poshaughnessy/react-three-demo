import React from 'react';
import THREE from 'three';
import ReactTHREE from 'react-three';
import ControlsComponent from './controls';
import SceneComponent from './scene';
import Constants from '../constants';

/**
 * TODO consider switching to an events system so Controls can notify and Scene listen directly
 */
class AppComponent extends React.Component {

    constructor() {

        this.state = {
            model: Constants.MODEL.ROBOT_ROBBY,
            animation: Constants.ANIMATION.SPIN_LEFT
        };

        this._onChangeModel = this._onChangeModel.bind(this);
        this._onChangeAnimation = this._onChangeAnimation.bind(this);

    }


    render() {

        console.log('App component render');

        return (
            <div>
                <ControlsComponent model={this.state.model} animation={this.state.animation} onChangeModel={this._onChangeModel} onChangeAnimation={this._onChangeAnimation}/>
                <SceneComponent model={this.state.model} animation={this.state.animation}/>
            </div>
        );

    }

    _onChangeModel(model) {

        this.setState({model: model});

    }

    _onChangeAnimation(animation) {

        this.setState({animation: animation});

    }

}

export default AppComponent;
