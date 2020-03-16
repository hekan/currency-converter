import React from "react";
import {appConfig} from "../../appConfigs";
import {isValidForInput, leaveTwoDecimalsOnString, replaceCommasToPeriods} from "../../utils/inputs";

const AmountInput = (props) => {
    const amount = leaveTwoDecimalsOnString(props.amount);

    const validate = event => {
        const pureValue = replaceCommasToPeriods(event.target.value);
        const isValid = isValidForInput(pureValue);
        console.log({pureValue, isValid, value: event.target.value});
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
