import styled from 'styled-components';

export const Container = styled.button`
  background: var(--primary);
  border-radius: 10px;
  border: 0;
  height: 56px;
  padding: 0 16px;
  color: var(--background);
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
