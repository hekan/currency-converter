import React from "react";

const DoExchange = (props) => {
    return (
        <div className="bottom-area">
            <div className="flex-container flex-container--centered">
                    <button onClick={props.onConvert} className="exchange-button">Convert</button>
            </div>

        </div>
    )
};

export default DoExchange;
