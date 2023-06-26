import styled, { css } from 'styled-components';

export const ResultOfSearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.fonts.small};
    justify-content: space-between;
    color: ${theme.colors.white};
    align-items: center;
    font-weight: 400;
    margin: 24px 0;

    .bold {
      font-weight: 900;
    }
  `}
`;
