import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import MiddleArea from './MiddleArea';

let container = null;
const input = () => container.querySelector('.middle-area__content');
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

it('renders MiddleArea with props values', () => {
	render(
		<MiddleArea>
			some content for middle area
		</MiddleArea>, container);
	expect(input().innerHTML).toBe('some content for middle area');
});
