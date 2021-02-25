import styled from 'styled-components';
import welcomeBackground from '../assets/backgrounds/welcome.png';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Background = styled(Overlay)`
  background-image: url(${welcomeBackground});
  background-position: 65% center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const WhiteOverlay = styled(Overlay)`
  background-color: #FFFFFF;
  opacity: 0.8;
  filter: blur(4px);
`;

const BlackOverlay = styled(Overlay)`
  background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.3) 100%);
`;

const WelcomeBackground = (): JSX.Element => (
  <Overlay>
    <Background />
    <WhiteOverlay />
    <BlackOverlay />
  </Overlay>
);

export default WelcomeBackground;
