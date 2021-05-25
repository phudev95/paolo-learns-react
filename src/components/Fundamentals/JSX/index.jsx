import React from 'react';
import { CodeHighlighter } from '../../UI/CodeHighlighter';
import { Devider } from '../../UI/Devider';
import { codeCompiled, codeJsx, codeWithoutJsx } from './code';

export const JSX = () => {
  return (
    <>
      <h2 className="point-title">JSX</h2>
      <p className="small-text">
        JSX combines the JS from JavaScript and the X from XML. It is a
        JavaScript extension that allows us to define React elements using a
        tag-based syntax directly within our JavaScript code. Sometimes JSX is
        confused with HTML because they look similar. JSX is just another way of
        creating React elements, so you don’t have to pull your hair out looking
        for the missing comma in a complex createElement call.
      </p>

      <Devider />
      <span className="small-text">JSX</span>
      <CodeHighlighter code={codeJsx} />

      <Devider />
      <span className="small-text">Translate JSX to ES5</span>
      <CodeHighlighter code={codeWithoutJsx} />

      <Devider />
      <span className="small-text">Everything in ES5</span>
      <CodeHighlighter code={codeCompiled} />
    </>
  );
};
