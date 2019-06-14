import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    value = (e) => {
        // let numbers = document.querySelectorAll('.numbers');
        // numbers.forEach(function(element) {
        //     console.log(element.getAttribute('value'));
        // });
        console.log(e.value);
    }


    // _handleNVEvent = event => {
    //     ...
    // };

    // componentDidMount() {
    //     ReactDOM.findDOMNode(this).addEventListener('nv-event', this._handleNVEvent);
    // }

    // componentWillUnmount() {
    //     ReactDOM.findDOMNode(this).removeEventListener('nv-event', this._handleNVEvent);
    // }

    render() {
        return (
            <div className="buttonsMain">
                {/* top */}
                <div className="top buttonsFlex">
                    <button id="clear" onClick={this.props.clear}>clear</button>
                    <button className="calculations">&#xf7;</button>
                </div>
                {/* mid 1 */}
                <div className="mid1 buttonsFlex">
                    <button className="numbers" value="7" onClick={this.props.seven}>7</button>
                    <button className="numbers" value="8" onClick={this.props.eight}>8</button>
                    <button className="numbers" value="9" onClick={this.props.nine}>9</button>
                    <button className="calculations">&#215;</button>
                </div>
                {/* mid 2 */}
                <div className="mid2 buttonsFlex">
                    <button className="numbers" value="4" onClick={this.props.four}>4</button>
                    <button className="numbers" value="5" onClick={this.props.five}>5</button>
                    <button className="numbers" value="6" onClick={this.props.six}>6</button>
                    <button className="calculations">&#x2212;</button>
                </div>
                {/* mid 3 */}
                <div className="mid3 buttonsFlex">
                    <button className="numbers" value="1" onClick={this.props.one}>1</button>
                    <button className="numbers" value="2" onClick={this.props.two}>2</button>
                    <button className="numbers" value="3" onClick={this.props.three}>3</button>
                    <button className="calculations" onClick={this.props.add}>&#x2b;</button>
                </div>
                {/* bottom */}
                <div className="bottom buttonsFlex">
                    <button className="numbers zero" value="0" onClick={this.props.zero}>0</button>
                    <button className="numbers" value="." onClick={this.props.dot}>.</button>
                    <button className="calculations" equal={this.props.equal}>&#x3d;</button>
                </div>
            </div>
        )
    }
}

export default Buttons;