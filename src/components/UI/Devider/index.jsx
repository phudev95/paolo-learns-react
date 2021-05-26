import PropTypes from 'prop-types';

export const Devider = ({ height = 40 }) => {
  return <div style={{ height }} />;
};

Devider.defaultProps = {
  height: 40,
};

Devider.propTypes = {
  height: PropTypes.number,
};
