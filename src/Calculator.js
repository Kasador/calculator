import React, { Component } from 'react';
import './Calculator.css';
import Buttons from './Buttons/Buttons';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 0,
            second: 0
        }
        if (this.state.display === 0) {
            this.setState({
                second: this.state.second = 3
            });
        }

        this.add = this.add.bind(this);
        this.clear = this.clear.bind(this);
        this.concat = this.concat.bind(this);
    }
    // calcuate function
    add(num1, num2) {
        let firstNumber = Number(num1),
            secondNumber = num2,
            total = firstNumber + secondNumber;

        this.setState({
            display: this.state.display = total
        });
    }
    // clear function
    clear() {
        this.setState({
            display: this.state.display = 0
        });
    }
    concat(value) {
        if (this.state.display !== 0) {
            this.setState({
                display: this.state.display += value
            });
        } else {
            this.setState({
                display: this.state.display = value
            });
        }
    }
    equal = () => {

    }
    render() {
        const styles = {
            borderBottom: '2px solid gray',
            color: 'gray',
            padding: '10px',
            marginBottom: '50px'
        }
        console.log(this.state.second);
        return (
            <div className="calculatorMain">
                <h1 style={styles}>Calculator Made With React</h1>
                <span className="display">{this.state.display}</span>
                <Buttons 
                    clear={this.clear}
                    dot={() => this.concat('.')}
                    zero={() => this.concat('0')}
                    one={() => this.concat('1')}
                    two={() => this.concat('2')}
                    three={() => this.concat('3')}
                    four={() => this.concat('4')}
                    five={() => this.concat('5')}
                    six={() => this.concat('6')}
                    seven={() => this.concat('7')}
                    eight={() => this.concat('8')}
                    nine={() => this.concat('9')} 
                    add={() => this.add(this.state.display, this.state.second)}/>
            </div>
        );
    }
}

export default Calculator;