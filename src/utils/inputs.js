const decimalReg = /^\d+(\.\d{1,2})?$/;

export const hasLastDot = str => str.indexOf('.') === str.length - 1
    && str.charAt(str.length - 1) === '.' && str.length > 1;

export const replaceCommasToPeriods = str => str.replace(',', '.');

/**
 * isValidForInput shows whether the user typed input is valid to go to store.
 * It allows:
 *  - empty string (not ' ')
 *  - chars with . at the end
 *  - Numbers in-a-string with up to 2 decimals
 *
 *  Note: naturally it allows to output true in case of letters, and this is not OK.
 *  I decided to move that validation part to html input pattern
 * @param pureValue
 * @returns {boolean}
 */
export const isValidForInput = pureValue => {
    return pureValue === '' || !!hasLastDot(pureValue) || !!decimalReg.test(pureValue);
};

export const leaveTwoDecimalsOnString = s => {
    s = s + '';
    const dotIndex = s.indexOf('.');
    if (dotIndex === -1) return s;
    return s.substring(0, dotIndex + 3);
};
