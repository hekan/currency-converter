import React from "react";

const MiddleArea = (props) => {
    return (
        <div className="middle-area flex-container flex-container--centered">
            <div className="wallet__content">
                <div className="flex-container">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default MiddleArea;
