import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = ({ routes }) => {
  const location = useLocation();

  const checkActive = (pathname) => {
    return location.pathname === pathname;
  };

  const renderRoutes = (routesList, prevPath = '') => {
    const items = routesList.map((route) => (
      <li
        key={route.path}
        className={checkActive(prevPath + route.path) ? 'active' : ''}
      >
        <Link to={prevPath + route.path}>{route.sidebarName}</Link>
        {route.childRoutes && renderRoutes(route.childRoutes, `${route.path}/`)}
      </li>
    ));

    return <ul>{items}</ul>;
  };

  return <div className="sidebar">{renderRoutes(routes)}</div>;
};

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
