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
                <RadioGroup name="model" value={this.props.model} ref="modelGroup" onChange={this._onChangeModel}>
                    <input type="radio" value={Constants.MODEL.ROBOT}/>Robot
                    <input type="radio" value={Constants.MODEL.MONSTER}/>Monster
                </RadioGroup>
                <RadioGroup name="animation" value="forwards-and-back" ref="animationGroup" onChange={this._onChangeAnimation}>
                    <input type="radio" value={Constants.ANIMATION.FORWARDS_AND_BACK}/>Forwards and Back
                    <input type="radio" value={Constants.ANIMATION.LEFT_AND_RIGHT}/>Left and Right
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
    }


}

export default ControlsComponent;
