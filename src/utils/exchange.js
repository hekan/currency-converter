export const formulaFrom = (amount, from, to) => formateNumber(amount * (to / from)) + '';
export const formulaTo = (amount, from, to) => formateNumber(amount * (from / to)) + '';

const formateNumber = n => parseFloat(fixNumber(n, 5));
export const convertAmount = n => {
    return parseFloat(fixNumber(n, 2)) + '';
};
const fixNumber = (n, digits) => n.toFixed(digits);
