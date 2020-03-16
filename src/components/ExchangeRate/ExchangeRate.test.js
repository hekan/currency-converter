import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import ExchangeRate from './ExchangeRate';

let container = null;
const currencies = {};
const exchangePairs = {};
const input = () => container.querySelector('.exchange-rate');
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
	currencies.usd = 1.2;
	currencies.eur = 1;
	currencies.gbp = 0.89;
	exchangePairs.from = 'usd';
	exchangePairs.to = 'eur';


});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('renders ExchangeRate with props values', () => {
	render(
		<ExchangeRate currencies={currencies} exchangePairs={exchangePairs}>
		</ExchangeRate>, container);
	expect(input().textContent).toBe('1$ = 0.83333€');
});
