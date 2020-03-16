import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import DoExchange from './DoExchange';
import {appConfig} from '../../appConfigs';

let container = null;
const input = () => container.querySelector('.exchange-button');
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

it('renders DoExchange with props values', () => {
	const mockClickCallback = jest.fn();
	render(
		<DoExchange disabled={true} onConvert={mockClickCallback}>
		</DoExchange>, container);
	expect(input().disabled).toBe(true);
	expect(input().innerHTML).toBe(appConfig.convertButtonName);
	act(() => {
		input().dispatchEvent(new MouseEvent('click', {bubbles: true}));
	});
	expect(mockClickCallback).toHaveBeenCalledTimes(0);
});

it('calls onConvert after clicked', () => {
	const mockClickCallback = jest.fn();
	render(
		<DoExchange disabled={false} onConvert={mockClickCallback}>
		</DoExchange>, container);
	act(() => {
		input().dispatchEvent(new MouseEvent('click', {bubbles: true}));
	});
	expect(mockClickCallback).toHaveBeenCalledTimes(1);
});
