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
                <RadioGroup name="robot" className="radio-group" value={this.props.robot} ref="robotGroup" onChange={this._onChangeRobot}>
                    <input type="radio" id={Constants.ROBOT.MECH} value={Constants.ROBOT.MECH}/><label htmlFor={Constants.ROBOT.MECH}>Mech</label>
                    <input type="radio" id={Constants.ROBOT.ROBBY} value={Constants.ROBOT.ROBBY}/><label htmlFor={Constants.ROBOT.ROBBY}>Robby</label>
                </RadioGroup>
                <span className="group-label">Spin:</span>
                <RadioGroup name="spin-direction" className="radio-group" value={this.props.spinDirection} ref="spinDirectionGroup" onChange={this._onChangeSpinDirection}>
                    <input type="radio" id={Constants.SPIN.LEFT} value={Constants.SPIN.LEFT}/><label htmlFor={Constants.SPIN.LEFT}>Left</label>
                    <input type="radio" id={Constants.SPIN.RIGHT} value={Constants.SPIN.RIGHT}/><label htmlFor={Constants.SPIN.RIGHT}>Right</label>
                </RadioGroup>
                <span className="group-label">Spin Speed:</span>
                <input type="range" value={this.props.spinSpeed} ref="spinSpeed" onInput={this._onSpinSpeedInput} onChange={this._onSpinSpeedInput}/>
            </header>
        );

    }

    _onChangeRobot() {

        var robot = this.refs.robotGroup.getCheckedValue();
        this.props.onChangeRobot(robot);

    }

    _onChangeSpinDirection() {

        var spinDirection = this.refs.spinDirectionGroup.getCheckedValue();
        this.props.onChangeSpinDirection(spinDirection);

    }

    _onSpinSpeedInput(e) {

        var spinSpeed = e.target.value;
        this.props.onChangeSpinSpeed(spinSpeed);

    }

}

export default ControlsComponent;
