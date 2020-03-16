import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import SwapWallets from './SwapWallets';

let container = null;
const input = () => container.querySelector('.swap');
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

it('renders SwapWallets with props values and emits a click', () => {
	const mockFn = jest.fn();
	render(<SwapWallets swap={mockFn}/>, container);
	expect(mockFn).toHaveBeenCalledTimes(0);
	act(() => {
		input().dispatchEvent(new MouseEvent('click', {bubbles: true}));
	});
	act(() => {
		input().dispatchEvent(new MouseEvent('click', {bubbles: true}));
	});
	act(() => {
		input().dispatchEvent(new MouseEvent('click', {bubbles: true}));
	});
	expect(mockFn).toHaveBeenCalledTimes(3);
});
