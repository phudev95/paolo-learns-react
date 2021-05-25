export const codeJsx = `
export const Component = () => {
  return (
    <h1>
      Hello World!
    </h1>
  );
};
`;

export const codeWithoutJsx = `
export const Component = () => {
  return (
    React.createElement("h1", {
      children: "Hello World!"
    });
  );
};
`;

export const codeCompiled = `
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var Component = function Component() {
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)("h1", {
    children: "Hello World!"
  });
};

exports.Component = Component;
`;
