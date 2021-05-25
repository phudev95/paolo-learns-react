import { routes } from './config/routes';
import { RouteBuilder } from './routes/RouterBuilder';

function App() {
  return (
    <div className="app">
      <RouteBuilder routes={routes} />
    </div>
  );
}

export default App;
