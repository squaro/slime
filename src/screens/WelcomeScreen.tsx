import styled from 'styled-components';
import Logo from '../components/Logo';
import Screen from '../components/Screen';
import StartButton from '../components/StartButton';
import WelcomeBackground from '../components/WelcomeBackground';
import WelcomeText from '../components/WelcomeText';

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const BottomContainer = styled(Container)`
  justify-content: flex-end;
`;

const WelcomeScreen = (): JSX.Element => {
  return (
    <Screen>
      <WelcomeBackground />
      <Container>
        <Logo />
      </Container>
      <BottomContainer>
        <WelcomeText />
        <StartButton />
      </BottomContainer>
    </Screen>
  );
};

export default WelcomeScreen;
