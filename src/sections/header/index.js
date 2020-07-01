import React from 'react';
import { Navbar } from '../../components';
import { Container, Wrapper } from './styles';

function Header() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <h1>HEADER</h1>
      </Wrapper>
    </Container>

  );
}

export default Header;
