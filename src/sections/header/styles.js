import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 100px;
`;

export const WrapCaption = styled.div`
  display: flex;
  max-width: 60%;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 64px;
  color: ${colors.textDark};
`;

export const Subtitle = styled.h3`
  font-size: 22px;
  margin-top: 10px;
  font-weight: 400;
  color: ${colors.textSecondary};
`;
