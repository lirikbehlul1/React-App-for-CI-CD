"use strict";
// src/App.test.tsx
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var App = function () {
    var greeting = 'Hello, World!';
    return <h1>{greeting}</h1>;
};
test('renders hello world', function () {
    var getByText = (0, react_2.render)(<App />).getByText;
    var helloWorldText = getByText(/hello, world/i);
    expect(helloWorldText).toBeInTheDocument();
});
