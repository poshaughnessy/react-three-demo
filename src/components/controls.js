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
                    <input type="radio" id={Constants.MODEL.ROBOT} value={Constants.MODEL.ROBOT}/><label for={Constants.MODEL.ROBOT}>Robot</label>
                    <input type="radio" id={Constants.MODEL.MONSTER} value={Constants.MODEL.MONSTER}/><label for={Constants.MODEL.MONSTER}>Monster</label>
                </RadioGroup>
                <RadioGroup name="animation" className="radio-group" value="forwards-and-back" ref="animationGroup" onChange={this._onChangeAnimation}>
                    <input type="radio" id={Constants.ANIMATION.FORWARDS_AND_BACK} value={Constants.ANIMATION.FORWARDS_AND_BACK}/><label for={Constants.ANIMATION.FORWARDS_AND_BACK}>Forwards and Back</label>
                    <input type="radio" id={Constants.ANIMATION.LEFT_AND_RIGHT} value={Constants.ANIMATION.LEFT_AND_RIGHT}/><label for={Constants.ANIMATION.LEFT_AND_RIGHT}>Left and Right</label>
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
