import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routes from './config/routes';
import RoundScreen from './screens/RoundScreen';

const App = (): JSX.Element => (
  <div className="app">
    <Router>
      <Switch>
        <Route path={routes.home}>
          <RoundScreen />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
