import {hasLastDot, isValidForInput, leaveTwoDecimalsOnString, replaceCommasToPeriods} from './inputs';

test('hasLostDot should return true if last char is dot', () => {
	const noLastDot = hasLastDot('0.212');
	expect(noLastDot).toBe(false);
	const lastDot = hasLastDot('131.');
	expect(lastDot).toBe(true);
	expect(hasLastDot('random string')).toBe(false);
});

test('replaceCommasToPeriods should return string with commas replaced to dots', () => {
	const commasReplaced = replaceCommasToPeriods('1,21');
	expect(commasReplaced).toBe('1.21');
	const dotsAndCommas = replaceCommasToPeriods('212,09.');
	expect(dotsAndCommas).toBe('212.09.');
});

test('isValidForInput should say true if number has up to two decimals', () => {
	const notValid = isValidForInput('012.021');
	expect(notValid).toBe(false);
	const valid = isValidForInput('012.02');
	expect(valid).toBe(true);
});

test('isValidForInput should say true if in case of empty string', () => {
	expect(isValidForInput('')).toBe(true);
	expect(isValidForInput(' ')).toBe(false);
});

test('isValidForInput should say false in case of non-number string', () => {
	expect(isValidForInput('01AB')).toBe(false);
	expect(isValidForInput('AD.231')).toBe(false);
	expect(isValidForInput('01.d')).toBe(false);
});

test('isValidForInput should say true in case of last dot', () => {
	expect(isValidForInput('01.')).toBe(true);
	expect(isValidForInput('F.')).toBe(true); // this is ok
});

test('leaveTwoDecimalsOnString should cut if there are more than two decimals', () => {
	expect(leaveTwoDecimalsOnString('1221.2999999')).toBe('1221.29');
	expect(leaveTwoDecimalsOnString('1221.1')).toBe('1221.1');
	expect(leaveTwoDecimalsOnString('1221')).toBe('1221');
	expect(leaveTwoDecimalsOnString('1221.021')).toBe('1221.02');
});

