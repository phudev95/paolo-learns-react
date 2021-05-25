import PropTypes from 'prop-types';
import { ChildRouteBuilder } from '../../routes/ChildRouteBuilder';

export const FundamentalsScreen = ({ childRoutes }) => {
  return (
    <>
      <h1 className="main-point-title">Fundamentals Screen</h1>

      <ChildRouteBuilder childRoutes={childRoutes} />
    </>
  );
};

FundamentalsScreen.propTypes = {
  childRoutes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
