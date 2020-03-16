import {formulaFrom} from "./exchange";

test('formulaFrom should convert amount from source to destination', () => {
    const converted = formulaFrom(100, 1, 1.12271);
    expect(converted).toBe('112.271');
});

test('formulaTo should convert amount from destination to source', () => {
    const converted = formulaFrom(100, 1.12271, 1);
    expect(converted).toBe('89.0702');
});

