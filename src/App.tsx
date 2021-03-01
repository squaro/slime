import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import routes from './config/routes';
import RoundScreen from './screens/RoundScreen';

const App = (): JSX.Element => (
  <div className="app">
    <ModalProvider>
      <Router>
        <Switch>
          <Route path={routes.home}>
            <RoundScreen />
          </Route>
        </Switch>
      </Router>
    </ModalProvider>
  </div>
);

export default App;
