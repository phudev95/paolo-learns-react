import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./config/routes";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch className="content">
          {routes.map(
            ({ path, exact, component: Component, layout: Layout }, index) => (
              <Route
                key={index}
                path={path}
                exact={exact}
                render={(props) => (
                  <Layout>
                    <Component {...props} />
                  </Layout>
                )}
              />
            )
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
