import React from 'react';
import ReactTHREE from 'react-three';
import RadioGroup from 'react-radio-group';
import Constants from '../constants';

class ControlsComponent extends React.Component {

    constructor(props) {

        super(props);

        this.displayName = 'Controls';

        this._onChangeRobot = this._onChangeRobot.bind(this);
        this._onChangeSpinDirection = this._onChangeSpinDirection.bind(this);
        this._onSpinSpeedInput = this._onSpinSpeedInput.bind(this);

    }

    render() {

        return (
            <header>
                <span className="group-label">Robot:</span>
                <RadioGroup name="robot" selectedValue={this.props.robot} ref="robotGroup" onChange={this._onChangeRobot}>
                    {Radio => (
                        <div className="radio-group">
                            <label><Radio value={Constants.ROBOT.MECH}/>Mech</label>
                            <label><Radio value={Constants.ROBOT.ROBBY} />Robby</label>
                        </div>
                    )}
                </RadioGroup>
                <span className="group-label">Spin:</span>
                <RadioGroup name="spin-direction" selectedValue={this.props.spinDirection} ref="spinDirectionGroup" onChange={this._onChangeSpinDirection}>
                    {Radio => (
                        <div className="radio-group">
                            <label><Radio value={Constants.SPIN.LEFT}/>Left</label>
                            <label><Radio value={Constants.SPIN.RIGHT}/>Right</label>
                        </div>
                    )}
                </RadioGroup>
                <span className="group-label">Spin Speed:</span>
                <input type="range" value={this.props.spinSpeed} ref="spinSpeed" onInput={this._onSpinSpeedInput} onChange={this._onSpinSpeedInput}/>
            </header>
        );

    }

    _onChangeRobot(value) {
        this.props.onChangeRobot(value);
    }

    _onChangeSpinDirection(value) {
        this.props.onChangeSpinDirection(value);
    }

    _onSpinSpeedInput(e) {
        var spinSpeed = e.target.value;
        this.props.onChangeSpinSpeed(spinSpeed);
    }

}

export default ControlsComponent;
