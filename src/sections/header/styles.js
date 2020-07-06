import styled from 'styled-components';
import { colors } from '../../theme';
import Runner from '../../assets/images/man-running.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 100px;

  @media(max-width: 1080px) and (min-width: 904px) {
    font-size: 44px;
  }

  @media(max-width: 903.98px) and (min-width: 728px) {
    padding: 80px 20px;
  }

  @media(max-width: 551.98px) {
    padding: 20px;
    align-items: center;
    flex-direction: column;
  }
`;

export const Image = styled.img.attrs({
  src: Runner,
})`
  max-width: 454px;
  max-height: 459px;

  @media(max-width: 1080px) and (min-width: 904px) {
    max-width: 404px;
    max-height: 409px;
  }

  @media(max-width: 903.98px) and (min-width: 728px) {
    max-width: 354px;
    max-height: 359px;
  }

  @media(max-width: 551.98px) {
    max-width: 254px;
    max-height: 259px;
  }
`;

export const WrapCaption = styled.div`
  display: flex;
  max-width: 60%;
  flex-direction: column;

  @media(max-width: 551.98px) {
    max-width: 90%;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  color: ${colors.textDark};

  @media(max-width: 1080px) and (min-width: 904px) {
    font-size: 38px;
  }

  @media(max-width: 903.98px) and (min-width: 728px) {
    font-size: 34px;
  }

  @media(max-width: 551.98px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 22px;
  margin-top: 10px;
  font-weight: 400;
  color: ${colors.textSecondary};

  @media(max-width: 1080px) and (min-width: 904px) {
    font-size: 20px;
  }

  @media(max-width: 903.98px) and (min-width: 728px) {
    font-size: 18px;
  }

  @media(max-width: 551.98px) {
    font-size: 14px;
  }
`;
