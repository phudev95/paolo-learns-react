import PropTypes from 'prop-types';
import { Sidebar } from '../Sidebar';

export const BasicLayout = ({ children, routes }) => {
  return (
    <div className="basic-layout">
      <div className="basic-layout--sidebar">
        <Sidebar routes={routes} />
      </div>
      <div className="basic-layout--content">{children}</div>
    </div>
  );
};

BasicLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
