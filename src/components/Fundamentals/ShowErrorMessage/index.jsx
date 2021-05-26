import { useState } from 'react';
import { Devider } from '../../UI/Devider';

export const ShowErrorMessage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleThrowError = () => {
    setErrorMessage('Something went wrong!');
  };

  const handleHideError = () => {
    setErrorMessage('');
  };

  return (
    <>
      <h2 className="point-title">Show Error Message</h2>

      <div>
        {errorMessage && (
          <p className="error-message small-text">{errorMessage}</p>
        )}

        <Devider />

        <p className="small-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <Devider />

        <button type="button" onClick={handleThrowError}>
          Throw Error
        </button>

        <button type="button" onClick={handleHideError}>
          Hide Error
        </button>
      </div>
    </>
  );
};
