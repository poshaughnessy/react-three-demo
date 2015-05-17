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
            animation: Constants.ANIMATION.SPIN_LEFT,
            spinSpeed: Constants.SPIN_SPEED_DEFAULT
        };

        this._onChangeModel = this._onChangeModel.bind(this);
        this._onChangeAnimation = this._onChangeAnimation.bind(this);
        this._onChangeSpinSpeed = this._onChangeSpinSpeed.bind(this);

    }


    render() {

        console.log('App component render');

        return (
            <div>
                <ControlsComponent model={this.state.model} animation={this.state.animation} spinSpeed={this.state.spinSpeed} onChangeModel={this._onChangeModel} onChangeAnimation={this._onChangeAnimation} onChangeSpinSpeed={this._onChangeSpinSpeed}/>
                <SceneComponent model={this.state.model} animation={this.state.animation} spinSpeed={this.state.spinSpeed}/>
            </div>
        );

    }

    _onChangeModel(model) {

        this.setState({model: model});

    }

    _onChangeAnimation(animation) {

        this.setState({animation: animation});

    }

    _onChangeSpinSpeed(spinSpeed) {

        console.log('on change spin speed', spinSpeed);

        this.setState({spinSpeed: spinSpeed});

    }

}

export default AppComponent;
