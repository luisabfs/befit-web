import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 70px;
  background-color: ${colors.primaryLight};
`;

export const Menu = styled.ul`
  display: flex;
  width: 100%;
  padding: 10px 0;
  list-style: none;
  max-width: 1200px;

  @media(max-width: 1080px) and (min-width: 904px) {
    margin: 0 64px;
  }

  @media(max-width: 903.98px) and (min-width: 728px) {
    margin: 0 48px;
  }

  @media(max-width: 551.98px) {
    margin: 0 24px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  color: ${colors.textLight};
  font-size: 18px;
  font-weight: 500;
  padding: 10px 15px;

  &:first-child {
    margin-right: auto;
    padding: 0 15px;
  }

  @media(max-width: 727px) {
    &:not(:first-child) {
      display: none;
    }
  }
`;
