import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;
  background-color: ${colors.primaryLight};

  @media(max-width: 1080px) and (min-width: 904px) {
    padding: 0 64px;
  }

  @media(max-width: 903.98px) and (min-width: 728px) {
    padding: 0 48px;
  }

  @media(max-width: 551.98px) {
    padding: 0 24px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  width: 100%;
  padding: 10px;
  list-style: none;
  max-width: 1200px;

  @media(max-width: 551.98px) {
    padding: 0;
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
    padding: 0px 15px;
  }

  @media(max-width: 727px) {
    &:not(:first-child) {
      display: none;
    }
  }
`;
