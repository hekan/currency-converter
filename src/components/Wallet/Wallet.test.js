import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import ReactTestUtils, {act} from 'react-dom/test-utils';
import Wallet from './Wallet';
import store from '../../state';
import Provider from 'react-redux/lib/components/Provider';

let container = null;
const input = () => container.querySelector('.wallet');
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('renders Wallet with props values', () => {
	render(
		<Provider store={store}><Wallet classes={' wallet--bottom'}/>
		</Provider>, container);
	expect(input().classList.contains('wallet-bottom')).toBe(false);
	expect(input().classList.contains('wallet--bottom')).toBe(true);
});

it('renders wallet lists for CurrenciesList', () => {
	render(
		<Provider store={store}><Wallet/>
		</Provider>, container);
	const walletsDropdown = container.querySelector('.currencies__dropdown');
	const options = walletsDropdown.innerHTML;
	expect(options).toBe('<option value="usd">USD</option><option value="eur">EUR</option><option value="gbp">GBP</option>');
});

it('emits changed Wallet', () => {
	const mockFn = jest.fn();
	render(
		<Provider store={store}><Wallet onWalletChanged={mockFn}/>
		</Provider>, container);
	const walletsDropdown = container.querySelector('.currencies__dropdown');
	walletsDropdown.value = 'eur';
	act(() => {
		ReactTestUtils.Simulate.change(walletsDropdown);
	});
	expect(mockFn).toHaveBeenCalledTimes(1);

});
