import React from "react";
import {connect} from "react-redux";
import Swap from "../../assets/sort.svg";
import {swap} from "../../state/exchange-pairs/actions";
import {swapInputs} from "../../state/exchange-inputs/actions";

const SwapWallets = (props) => {
    const {swapWallets} = props;
    const doSwap = () => {
        swapWallets();
        props.swapInputs();
    };
    return (
        <div onClick={doSwap} className="swap swap--gray-border">
            <img className="swap-image" src={Swap} alt="Swap"/>
        </div>
    );
};
const mapDispatchToProps = {swapWallets: swap, swapInputs};
const mapStateToProps = state => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(SwapWallets);
