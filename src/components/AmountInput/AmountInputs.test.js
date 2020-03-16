import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AmountInput from "./AmountInput";
import ReactTestUtils from 'react-dom/test-utils';

let container = null;
const input = () => container.querySelector('.amount__input');
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders AmountInput with props values", () => {
    render(<AmountInput amount={2122.1202} />, container);
    expect(input().value).toBe('2122.12');
});

it("dispatches valid amount", () => {
    const mockClickCallback = jest.fn();
    render(<AmountInput onInputChanged={mockClickCallback} amount={''} />, container);

    // act(() => {
    //     input().focus();
    //     input().dispatchEvent(new KeyboardEvent("keypress", { key: '5', bubbles: true }));
    // });
    const node = input();
    node.value = '12';
    act(() => {
        ReactTestUtils.Simulate.change(node);
    });
    expect(mockClickCallback).toHaveBeenCalledTimes(1);
    node.value = 'da';
    act(() => {
        ReactTestUtils.Simulate.change(node);
    });
    expect(mockClickCallback).toHaveBeenCalledTimes(1);
    node.value = '0.2';
    act(() => {
        ReactTestUtils.Simulate.change(node);
    });
    expect(mockClickCallback).toHaveBeenCalledTimes(2);
});
