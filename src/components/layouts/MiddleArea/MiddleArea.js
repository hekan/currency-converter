import React from "react";

const MiddleArea = (props) => {
    return (
        <div className="middle-area flex-container flex-container--centered">
            {props.children}
        </div>
    );
};

export default MiddleArea;
