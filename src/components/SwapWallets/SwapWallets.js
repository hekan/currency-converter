import React from "react";
import Swap from "../../assets/sort.svg";

const SwapWallets = (props) => {
    return (
        <div onClick={props.swap} className="swap swap--gray-border">
            <img className="swap-image" src={Swap} alt="Swap"/>
        </div>
    );
};

export default SwapWallets;
