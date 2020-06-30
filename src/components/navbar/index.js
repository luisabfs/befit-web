import React from 'react';

import NavMenu from './navmenu';
import { Container } from './styles';

import Brand from '../../assets/svg/brand@2x.svg';

function Navbar() {
  return(
    <Container>
      <img src={Brand} width="116px" />
      <NavMenu />
    </Container>
  );
}

export default Navbar;
