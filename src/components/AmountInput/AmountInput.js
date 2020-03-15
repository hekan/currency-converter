import React from "react";
import {appConfig} from "../../appConfigs";
import {isValidAmount, parseAmountValue} from "../../utils/inputs";

const AmountInput = (props) => {
    const {amount} = props;

    const validate = event => {
        const pureValue = parseAmountValue(event.target.value);
        const isValid = isValidAmount(pureValue);
        if (isValid) {
            props.onInputChanged(pureValue);
        }
    };

    return (
        <div className="amount">
            {props.children}
            <input onChange={validate}
                   className="amount__input"
                   type="text"
                   maxLength={appConfig.inputLength}
                   value={amount}
                   inputMode="numeric"
                   pattern="[0-9]*" placeholder="0"/>
        </div>
    )
};

export default AmountInput;
