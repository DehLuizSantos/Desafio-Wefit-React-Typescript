import styled, { css } from 'styled-components';

export const TextAreaContainer = styled.input`
  ${({ theme }) => css`
    border-radius: 4px;
    border: 1px solid ${theme.colors.gray[400]};
    height: 26px;
    width: 100%;
    padding-left: 5px;

    &:focus-visible {
      border: 1px solid ${theme.colors.blue[700]};
    }
  `}
`;
