import React from "react";
import {connect} from "react-redux";
import Swap from "../../assets/sort.svg";
import {swap} from "../../state/exchange-pairs/actions";

const SwapWallets = (props) => {
    const {swapWallets} = props;
    return (
        <div onClick={swapWallets} className="swap swap--gray-border">
            <img className="swap-image" src={Swap} alt="Swap"/>
        </div>
    );
};
const mapDispatchToProps = {swapWallets: swap};
const mapStateToProps = state => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(SwapWallets);
