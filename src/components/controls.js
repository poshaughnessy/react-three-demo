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

    }

    render() {

        console.log('this.props', this.props);

        return (
            <header>
                <RadioGroup name="model" className="radio-group" value={this.props.model} ref="modelGroup" onChange={this._onChangeModel}>
                    <input type="radio" id={Constants.MODEL.KNIGHT} value={Constants.MODEL.KNIGHT}/><label htmlFor={Constants.MODEL.KNIGHT}>Knight</label>
                    <input type="radio" id={Constants.MODEL.ROBOT} value={Constants.MODEL.ROBOT}/><label htmlFor={Constants.MODEL.ROBOT}>Robot</label>
                    <input type="radio" id={Constants.MODEL.DINOSAUR} value={Constants.MODEL.DINOSAUR}/><label htmlFor={Constants.MODEL.DINOSAUR}>Dinosaur</label>
                </RadioGroup>
                <RadioGroup name="animation" className="radio-group" value={this.props.animation} ref="animationGroup" onChange={this._onChangeAnimation}>
                    <input type="radio" id={Constants.ANIMATION.FORWARDS_AND_BACK} value={Constants.ANIMATION.FORWARDS_AND_BACK}/><label htmlFor={Constants.ANIMATION.FORWARDS_AND_BACK}>Forwards and Back</label>
                    <input type="radio" id={Constants.ANIMATION.SPIN} value={Constants.ANIMATION.SPIN}/><label htmlFor={Constants.ANIMATION.SPIN}>Spin</label>
                </RadioGroup>
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


}

export default ControlsComponent;
