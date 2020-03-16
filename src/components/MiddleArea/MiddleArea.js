import React from "react";
import './MiddleArea.css';
const MiddleArea = (props) => {
    return (
        <div className="middle-area flex-container flex-container--centered">
            <div className="wallet__content">
                <div className="middle-area__content flex-container">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default MiddleArea;
