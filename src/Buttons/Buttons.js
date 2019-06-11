import React from 'react';
import './Buttons.css';

const Buttons = () => {
    return (
        <div className="buttonsMain">
            {/* top */}
            <div className="top buttonsFlex">
                <button>clear</button>
                <button>&#xf7;</button>
            </div>
            {/* mid 1 */}
            <div className="mid1 buttonsFlex">
                <button>clear</button>
                <button>&#215;</button>
            </div>
            {/* mid 2 */}
            <div className="mid2 buttonsFlex">
                <button>clear</button>
                <button>&#x2212;</button>
            </div>
            {/* mid 3 */}
            <div className="mid3 buttonsFlex">
                <button>clear</button>
                <button>&#x2b;</button>
            </div>
            {/* bottom */}
            <div className="bottom buttonsFlex">
                <button>clear</button>
                <button>&#x3d;</button>
            </div>
        </div>
    );
}

export default Buttons;