import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import ModalBackground from './components/ModalBackground';
import routes from './config/routes';
import RoundScreen from './screens/RoundScreen';

// TODO: Test ModalProvider component
// TODO: Analyze if the router will be needed further
const App = (): JSX.Element => (
  <div className="app">
    <ModalProvider backgroundComponent={ModalBackground}>
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
