export const formulaFrom = (amount, from, to) => formateNumber(amount * (to / from));
export const formulaTo = (amount, from, to) => formateNumber(amount * (from / to));

const formateNumber = n => parseFloat(n.toFixed(5));
