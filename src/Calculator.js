import React, { Component } from 'react';
import './Calculator.css';
import Buttons from './Buttons/Buttons';

class Calculator extends Component {
    render() {
        return (
            <div className="calculatorMain">
                <span className="display">0</span>
                <Buttons />
            </div>
        );
    }
}

export default Calculator;