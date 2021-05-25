import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

export const RouteBuilder = ({ routes }) => {
  return (
    <Router>
      <Switch>
        {routes.map(
          ({
            path,
            exact,
            component: Component,
            layout: Layout,
            childRoutes,
          }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={() => (
                <Layout routes={routes}>
                  <Component childRoutes={childRoutes} />
                </Layout>
              )}
            />
          )
        )}
        <Redirect from="/" to={routes[0].path} />
      </Switch>
    </Router>
  );
};

RouteBuilder.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      component: PropTypes.element,
      layout: PropTypes.element,
      childRoutes: PropTypes.arrayOf(PropTypes.any),
    })
  ).isRequired,
};
