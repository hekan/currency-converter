import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CurrenciesList from "./CurrenciesList";

let container = null;
const input = () => container.querySelector('.currencies__dropdown');
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

it("renders CurrenciesList with props values", () => {
    const mockFn = jest.fn();
    render(<CurrenciesList changedOption={mockFn} selectedWallet={'usd'}><option value={'usd'}></option></CurrenciesList>, container);
    expect(input().value).toBe('usd');
});
