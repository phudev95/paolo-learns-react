import PropTypes from 'prop-types';

export const Devider = ({ height = 40 }) => {
  return <div style={{ height }} />;
};

Devider.propTypes = {
  height: PropTypes.number.isRequired,
};
