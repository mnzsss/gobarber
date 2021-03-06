import styled, { keyframes } from 'styled-components';

import signInBackground from '../../assets/signin-background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;

const appearFromLeft = keyframes`
from{
opacity: 0;
transform: translateX(-50px);
}
to{
  opacity: 1;
transform: translateX(0);
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: var(--white);
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  > a {
    color: var(--primary);
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: opacity 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
