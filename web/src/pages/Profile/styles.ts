import styled from 'styled-components';

export const Container = styled.div`
  > header {
    height: 144px;
    background: var(--dark);

    div {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 100%;

      svg {
        width: 24px;
        height: 24px;
        color: var(--gray);
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: -175px auto 0;

  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 186px;
  align-self: center;

  img {
    object-fit: cover;
    width: 185px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: var(--primary);
    border: 0;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    transition: opacity 0.4s;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: var(--background);
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
