import styled, { css } from 'styled-components';

type buttonProps = {
  colorStyle?: string;
};

export const ButtonContainer = styled.button<buttonProps>`
  ${({ colorStyle, theme }) => css`
    align-items: center;
    background-color: ${colorStyle === 'primary' ? theme.colors.blue[500] : theme.colors.green};
    border-radius: 4px;
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    font-size: ${theme.fonts.small};
    font-weight: 700;
    gap: 12px;
    height: 40px;
    justify-content: center;
    width: 100%;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.9;
    }

    &:hover {
      opacity: 0.8;
      transition: 0.5s;
    }
  `}
`;

export const ShoppingCart = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 5px;
    color: ${theme.colors.white};
  `}
`;
