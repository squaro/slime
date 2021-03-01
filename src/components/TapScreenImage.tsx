import { memo } from 'react';
import styled from 'styled-components';
import { ReactComponent as TapScreenSVG } from '../assets/instructions/tap-screen.svg';

const TapScreenImage = styled(TapScreenSVG)`
  margin: 12px;
`;

// Memoize component to prevent re-rendering
export default memo(TapScreenImage);
