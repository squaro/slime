import { RoundProvider } from './contexts/RoundContext';
import RoundScreen from './screens/RoundScreen';

const App = (): JSX.Element => (
  <div className="app">
    <RoundProvider>
      <RoundScreen />
    </RoundProvider>
  </div>
);

export default App;
