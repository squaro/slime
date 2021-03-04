import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import GlobalStyles from './components/GlobalStyles';
import ModalBackground from './components/ModalBackground';
import routes from './config/routes';
import RoundScreen from './screens/RoundScreen';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

// TODO: Test GlobalStyles component
// TODO: Test ModalProvider component
// TODO: Analyze if the router will be needed further
const App = (): JSX.Element => (
  <ModalProvider backgroundComponent={ModalBackground}>
    <GlobalStyles />
    <Wrapper>
      <Router>
        <Switch>
          <Route path={routes.home}>
            <RoundScreen />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  </ModalProvider>
);

export default App;
