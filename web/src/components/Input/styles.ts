import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--input-backgorund);
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid var(--input-backgorund);
  color: var(--helper);

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--error);
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--primary);
      color: var(--primary);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--primary);
    `}

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--white);

    &::placeholder {
      color: var(--helper);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  width: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--error);
    color: var(--white);

    &:before {
      border-color: var(--error) transparent;
    }
  }
`;
