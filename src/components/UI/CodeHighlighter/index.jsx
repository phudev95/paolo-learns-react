import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const CodeHighlighter = ({ code }) => {
  return (
    <SyntaxHighlighter
      className="code-highlighter"
      language="javascript"
      style={atomOneDarkReasonable}
      sty
    >
      {code}
    </SyntaxHighlighter>
  );
};

CodeHighlighter.propTypes = {
  code: PropTypes.string.isRequired,
};
