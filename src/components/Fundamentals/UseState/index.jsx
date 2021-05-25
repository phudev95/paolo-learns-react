import { useState } from 'react';
import { CodeHighlighter } from '../../UI/CodeHighlighter';
import code from './code';

export const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="point-title">useState()</h2>

      <p className="big-text mg-20">{count}</p>

      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button type="button" onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <CodeHighlighter code={code} />
    </>
  );
};
