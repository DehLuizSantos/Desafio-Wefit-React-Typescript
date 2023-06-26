import styled, { css } from 'styled-components';

export const CartWithoutProductContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 4px;
    padding: 64px;
    text-align: center;
    margin: 0 auto;

    h2 {
      font-size: ${theme.fonts.xxLarge};
      color: ${theme.colors.blue[700]};
      line-height: 27px;
      font-weight: 700;
      margin-bottom: 32px;
    }

    .divider {
      height: 2px;
      width: 96%;
      background-color: ${theme.colors.gray[600]};
      position: absolute;
      left: 2%;

      ${theme.responsive.tablet(css`
        max-width: 447px;
        position: relative;
        margin: 0 auto;
      `)}
    }

    .button-go-back {
      width: 180px;
      height: 40px;
      margin: 32px auto 0 auto;
    }
  `}
`;
