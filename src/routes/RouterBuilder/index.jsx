import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      </Switch>
    </Router>
  );
};

RouteBuilder.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
