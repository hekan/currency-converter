import React, {useState} from "react";
import {connect} from "react-redux";
import {setInputFrom, setInputTo} from "../../state/exchange-inputs/actions";
import {formulaFrom, formulaTo} from "../../utils/exchange";

const AmountInput = (props) => {
    const {isBottom, changeFrom, changeTo, exchangeInputs, exchangePairs, currencies} = props;
    let amount = isBottom ? exchangeInputs['to'] : exchangeInputs['from'];
    amount = parseFloat(Number(amount).toFixed(2));
    const validate = (event) => {
        const pureValue = event.target.value;
        const value = parseValue(pureValue);
        const decimalReg = /^\d+(\.\d{1,2})?$/;
        const isValid = value === '' || hasLastDot(value) || decimalReg.test(value);
        if (isValid) {
            onAmountChange(value);
        }
    };

    const onAmountChange = value => {
        if (isBottom) {
            changeTo(value);
            const con = formulaTo(value, currencies[exchangePairs.from], currencies[exchangePairs.to]);
            changeFrom(con);
        } else {
            changeFrom(value);
            const con = formulaFrom(value, currencies[exchangePairs.from], currencies[exchangePairs.to]);
            changeTo(con);
        }
    };

    return (
        <div className="amount">
            {props.children}
            <input onChange={validate}
                   className="amount__input"
                   type="text"
                   maxLength={11}
                   value={amount}
                   inputMode="numeric"
                   pattern="[0-9]*" placeholder="0"/>
        </div>
    )
};

const hasLastDot = (str) => str.indexOf('.') === str.length - 1 && str.charAt(str.length - 1) === '.';
const parseValue = (str) => str.toLowerCase().replace(/^0+/, '').replace(',', '.');


const mapStateToProps = state => {
    return {
        exchangeInputs: state.exchangeInputs,
        exchangePairs: state.exchangePairs,
        currencies: state.currencies
    };
};

const mapDispatchToProps = {
    changeFrom: setInputFrom,
    changeTo: setInputTo
};
export default connect(mapStateToProps, mapDispatchToProps)(AmountInput);
