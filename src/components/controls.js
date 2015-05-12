import React from 'react';
import ReactTHREE from 'react-three';
import RadioGroup from 'react-radio-group';

class ControlsComponent extends React.Component {

    constructor(props) {

        super(props);

        this.displayName = 'Controls';

    }

    render() {

        return (
            <header>
                <RadioGroup name="animation" value="forwards-and-back">
                    <input type="radio" value="forwards-and-back"/>Forwards and Back
                    <input type="radio" value="left-and-right"/>Left and Right
                </RadioGroup>
                <RadioGroup name="colour" value="purple">
                    <input type="radio" value="purple"/>Purple
                    <input type="radio" value="silver"/>Silver
                </RadioGroup>
            </header>
        );

    }

}

export default ControlsComponent;
