import React from 'react';
import Button from '../button';
import { Container, Menu, Item } from './styles';
import Brand from '../../assets/svg/brand-figma.svg';

function Navbar() {
  return(
    <Container>
      <Menu>
        <Item><img src={Brand} width="116px" /></Item>
        <Item>home</Item>
        <Item>motivação</Item>
        <Item>como funciona</Item>
      </Menu>
      <Button text="Cadastre-se" outlined />
    </Container>
  );
}

export default Navbar;
