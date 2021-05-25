import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export const ChildRouteBuilder = ({ childRoutes }) => {
  const { path: parentPath } = useRouteMatch();

  return (
    <Switch>
      {childRoutes.map(({ path: childPath, component: Component }) => (
        <Route
          key={childPath}
          path={`${parentPath}/${childPath}`}
          exact
          component={Component}
        />
      ))}
    </Switch>
  );
};

ChildRouteBuilder.propTypes = {
  childRoutes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
