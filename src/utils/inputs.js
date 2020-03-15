export const hasLastDot = (str) => str.indexOf('.') === str.length - 1
    && str.charAt(str.length - 1) === '.' && str.length > 1;

export const parseAmountValue = (str) => str.toLowerCase()
    .replace(/^0+/, '')
    .replace(',', '.');

export const isValidAmount = pureValue => {
    const decimalReg = /^\d+(\.\d{1,2})?$/;
    return pureValue === '' || hasLastDot(pureValue) || decimalReg.test(pureValue);
};
