import React, { Component } from 'react';
import './Calculator.css';
import Buttons from './Buttons/Buttons';

class Calculator extends Component {
    render() {
        const styles = {
            borderBottom: '2px solid gray',
            color: 'gray',
            padding: '10px',
            marginBottom: '50px'
        }

        return (
            <div className="calculatorMain">
                <h1 style={styles}>My Simple Calculator Made With React</h1>
                <span className="display">0</span>
                <Buttons />
            </div>
        );
    }
}

export default Calculator;