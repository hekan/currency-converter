import React, {useState} from "react";

const AmountInput = (props) => {
    const [amount, setAmount] = useState('');
    const validate = (event) => {
        const pureValue = event.target.value;
        const value = parseValue(pureValue);
        const decimalReg = /^\d+(\.\d{1,2})?$/;
        const isValid = value === '' || hasLastDot(value) || decimalReg.test(value);
        if (isValid) {
            setAmount(value);
        }
    };
    return (
        <div className="amount">
            {props.children}
            <input onChange={validate}
                   className="amount__input"
                   type="text"
                   maxLength={9}
                   value={amount}
                   inputMode="numeric"
                   pattern="[0-9]*" placeholder="0"/>
        </div>
    )
};

const hasLastDot = (str) => str.indexOf('.') === str.length - 1 && str.charAt(str.length - 1) === '.';
const parseValue = (str) => str.toLowerCase().replace(',', '.');

export default AmountInput;
