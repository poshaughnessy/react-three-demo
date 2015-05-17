import React from 'react';
import ReactTHREE from 'react-three';
import RadioGroup from 'react-radio-group';
import Constants from '../constants';

class ControlsComponent extends React.Component {

    constructor(props) {

        super(props);

        this.displayName = 'Controls';

        this._onChangeModel = this._onChangeModel.bind(this);
        this._onChangeAnimation = this._onChangeAnimation.bind(this);
        this._onSpinSpeedInput = this._onSpinSpeedInput.bind(this);

    }

    render() {

        console.log('this.props', this.props);

        return (
            <header>
                <span className="group-label">Robot:</span>
                <RadioGroup name="model" className="radio-group" value={this.props.model} ref="modelGroup" onChange={this._onChangeModel}>
                    <input type="radio" id={Constants.MODEL.ROBOT_ROBBY} value={Constants.MODEL.ROBOT_ROBBY}/><label htmlFor={Constants.MODEL.ROBOT_ROBBY}>Robby</label>
                    <input type="radio" id={Constants.MODEL.ROBOT_MECH} value={Constants.MODEL.ROBOT_MECH}/><label htmlFor={Constants.MODEL.ROBOT_MECH}>Mech</label>
                </RadioGroup>
                <span className="group-label">Spin:</span>
                <RadioGroup name="animation" className="radio-group" value={this.props.animation} ref="animationGroup" onChange={this._onChangeAnimation}>
                    <input type="radio" id={Constants.ANIMATION.SPIN_LEFT} value={Constants.ANIMATION.SPIN_LEFT}/><label htmlFor={Constants.ANIMATION.SPIN_LEFT}>Left</label>
                    <input type="radio" id={Constants.ANIMATION.SPIN_RIGHT} value={Constants.ANIMATION.SPIN_RIGHT}/><label htmlFor={Constants.ANIMATION.SPIN_RIGHT}>Right</label>
                </RadioGroup>
                <span className="group-label">Spin Speed:</span>
                <input type="range" value={this.props.spinSpeed} ref="spinSpeed" onInput={this._onSpinSpeedInput} onChange={this._onSpinSpeedInput}/>
            </header>
        );

    }

    _onChangeModel() {

        var model = this.refs.modelGroup.getCheckedValue();
        console.log(model);

        this.props.onChangeModel(model);

    }

    _onChangeAnimation() {

        var animation = this.refs.animationGroup.getCheckedValue();
        console.log(animation);

        this.props.onChangeAnimation(animation);

    }

    _onSpinSpeedInput(e) {

        console.log('on input spin speed', e);

        var spinSpeed = e.target.value;
        console.log(spinSpeed);

        this.props.onChangeSpinSpeed(spinSpeed);

    }

}

export default ControlsComponent;
