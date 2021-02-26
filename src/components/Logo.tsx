import styled from 'styled-components';
import SlimSpinArrow from './SlimSpinArrow';
import SpinArrow from './SpinArrow';

const LogoSpinArrow = styled(SpinArrow)`
  width: 125px;
  height: 125px;
`;

const Logo = (): JSX.Element => (
  <LogoSpinArrow $direction $spin>
    <SlimSpinArrow />
  </LogoSpinArrow>
);

export default Logo;
