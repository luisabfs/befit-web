import React from 'react';
import { Navbar, Button } from '../../components';
import { Container, Wrapper, WrapCaption, Title, Subtitle, Image } from './styles';

function Header() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Image />
        <WrapCaption>
          <Title>O futuro da atividade física é coletivo!</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem, dolore est debitis, error repellendus.
          </Subtitle>
          <Button text="Cadastre-se" />
        </WrapCaption>
      </Wrapper>
    </Container>

  );
}

export default Header;
