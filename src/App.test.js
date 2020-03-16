import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import ReactTestUtils, {act} from 'react-dom/test-utils';
import App from './App';
import {Provider} from 'react-redux';
import store from './state';
import {currenciesMeta} from './state/currencies/currencies-meta';
import {resetInputs} from './state/exchange-inputs/actions';
import {resetWallets} from './state/wallets/actions';
import {resetExchangePairs} from './state/exchange-pairs/actions';

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
	render(<Provider store={store}><App/></Provider>, container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	store.dispatch(resetExchangePairs());
	store.dispatch(resetInputs());
	store.dispatch(resetWallets());
	container.remove();
	container = null;
});

it('update destination amount on source change', () => {
	const source = container.querySelectorAll('.amount__input')[0];
	source.value = '220';
	act(() => {
		ReactTestUtils.Simulate.change(source);
	});
	const destination = container.querySelectorAll('.amount__input')[1];
	expect(destination.value).toBe('110');
});

it('update source amount on destination change', () => {
	const destination = container.querySelectorAll('.amount__input')[1];
	destination.value = '110';
	act(() => {
		ReactTestUtils.Simulate.change(destination);
	});
	const source = container.querySelectorAll('.amount__input')[0];
	expect(source.value).toBe('220');
});

it('update destination amount on source wallet change', () => {
	const source = container.querySelectorAll('.amount__input')[0];
	source.value = '220';
	act(() => {
		ReactTestUtils.Simulate.change(source);
	});
	const sourceWallet = container.querySelectorAll('.currencies__dropdown')[0];
	sourceWallet.value = 'eur';
	act(() => {
		ReactTestUtils.Simulate.change(sourceWallet);
	});
	const destination = container.querySelectorAll('.amount__input')[1];
	expect(destination.value).toBe('220');

});

it('update source amount on destination wallet change', () => {
	const destination = container.querySelectorAll('.amount__input')[1];
	destination.value = '110';
	act(() => {
		ReactTestUtils.Simulate.change(destination);
	});
	expect(destination.value).toBe('110');
	const destinationWallet = container.querySelectorAll('.currencies__dropdown')[1];
	destinationWallet.value = 'usd';
	act(() => {
		ReactTestUtils.Simulate.change(destinationWallet);
	});
	const source = container.querySelectorAll('.amount__input')[0];
	expect(source.value).toBe('220');
});

it('convert amount from one wallet to another', () => {
	const destination = container.querySelectorAll('.amount__input')[1];
	const exchange = container.querySelector('.exchange-button');
	destination.value = '110';
	act(() => {
		ReactTestUtils.Simulate.change(destination);
	});
	act(() => {
		exchange.dispatchEvent(new MouseEvent('click', {bubbles: true}));
	});
	const meta = container.querySelectorAll('.wallet__meta');
	expect(meta[0].textContent).toBe(`Wallet balance: 780 ${currenciesMeta.gbp.symbol}`);
	expect(meta[1].textContent).toBe(`Wallet balance: 1110 ${currenciesMeta.eur.symbol}`);
	destination.value = '2000';
	act(() => {
		ReactTestUtils.Simulate.change(destination);
	});
	expect(meta[0].textContent).toBe('Not enough balance');
});

it('swap wallets and inputs', () => {
	const source = container.querySelectorAll('.amount__input')[0];
	source.value = '220';
	act(() => {
		ReactTestUtils.Simulate.change(source);
	});
	const oldSourceWallet = container.querySelectorAll('.currencies__dropdown')[0];
	const oldDestinationWallet = container.querySelectorAll('.currencies__dropdown')[1];
	expect(oldSourceWallet.value).toBe('gbp');
	expect(oldDestinationWallet.value).toBe('eur');
	const swap = container.querySelector('.swap');
	act(() => {
		swap.dispatchEvent(new MouseEvent('click', {bubbles: true}));
	});
	const newSource = container.querySelectorAll('.amount__input')[0];
	const newDestination = container.querySelectorAll('.amount__input')[1];
	expect(newDestination.value).toBe('220');
	expect(newSource.value).toBe('110');
	const sourceWallet = container.querySelectorAll('.currencies__dropdown')[0];
	const destinationWallet = container.querySelectorAll('.currencies__dropdown')[1];
	expect(sourceWallet.value).toBe('eur');
	expect(destinationWallet.value).toBe('gbp');
});
