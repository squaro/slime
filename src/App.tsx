import {
  MemoryRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routes from './config/routes';
import RoundScreen from './screens/RoundScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const App = (): JSX.Element => (
  <div className="app">
    <Router>
      <Switch>
        <Route path={routes.round}>
          <RoundScreen />
        </Route>
        <Route path={routes.home}>
          <WelcomeScreen />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
