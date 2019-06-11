import React from 'react';
import './Buttons.css';

const Buttons = () => {
    return (
        <div className="buttonsMain">
            {/* top */}
            <div className="top buttonsFlex">
                <button id="clear">clear</button>
                <button className="calculations">&#xf7;</button>
            </div>
            {/* mid 1 */}
            <div className="mid1 buttonsFlex">
                <button className="numbers">7</button>
                <button className="numbers">8</button>
                <button className="numbers">9</button>
                <button className="calculations">&#215;</button>
            </div>
            {/* mid 2 */}
            <div className="mid2 buttonsFlex">
                <button className="numbers">4</button>
                <button className="numbers">5</button>
                <button className="numbers">6</button>
                <button className="calculations">&#x2212;</button>
            </div>
            {/* mid 3 */}
            <div className="mid3 buttonsFlex">
                <button className="numbers">1</button>
                <button className="numbers">2</button>
                <button className="numbers">3</button>
                <button className="calculations">&#x2b;</button>
            </div>
            {/* bottom */}
            <div className="bottom buttonsFlex">
                <button className="numbers zero">0</button>
                <button className="numbers">.</button>
                <button className="calculations">&#x3d;</button>
            </div>
        </div>
    );
}

export default Buttons;