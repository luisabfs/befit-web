import styled from 'styled-components';
import { colors } from '../../theme';

export const BaseButton = styled.button`
  width: 200px;
  height: 44px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 40px;
  font-family: 'Poppins';
  text-transform: initial;
  color: ${colors.textLight};
  margin-top:  ${({outlined}) => outlined ? '0px' : '40px'};
  border: ${({outlined}) => outlined ? '2px solid' : 'none'};
  background-color: ${({outlined}) => outlined ? 'transparent' : colors.accent};
`;
