import styled from 'styled-components';

const WelcomeTextParagraph = styled.p`
  text-align: center;
  color: #000000;
`;

const WelcomeText = (): JSX.Element => (
  <WelcomeTextParagraph>
    Press <b>Start</b> to begin tracking
    <br />
    the round's direction using
    <br />
    an interactive arrow!
  </WelcomeTextParagraph>
);

export default WelcomeText;
