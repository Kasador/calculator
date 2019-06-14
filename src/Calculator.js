import React, { Component } from 'react';
import './Calculator.css';
import Buttons from './Buttons/Buttons';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 0
        }

        this.calculate = this.calculate.bind(this);
    }
    calculate(num1, num2) {
        let firstNumber = num1,
            secondNumber = num2,
            total = firstNumber + secondNumber;

        this.setState({
            display: this.state.display = total
        });
    }

    render() {
        const styles = {
            borderBottom: '2px solid gray',
            color: 'gray',
            padding: '10px',
            marginBottom: '50px'
        }

        return (
            <div className="calculatorMain">
                <h1 style={styles}>Calculator Made With React</h1>
                <span className="display">{this.state.display}</span>
                <Buttons />
            </div>
        );
    }
}

export default Calculator;