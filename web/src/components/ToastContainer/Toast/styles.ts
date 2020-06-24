import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const ToastVariations = {
  info: css`
    background-color: var(--toast-info-background);
    color: var(--toast-info-color);
  `,
  success: css`
    background-color: var(--toast-success-background);
    color: var(--toast-success-color);
  `,
  error: css`
    background-color: var(--toast-error-background);
    color: var(--toast-error-color);
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

  display: flex;

  ${props => ToastVariations[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.8;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
