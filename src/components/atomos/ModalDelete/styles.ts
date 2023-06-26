import styled from 'styled-components';
import { css } from 'styled-components';

export const ModalDeleteWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray['700']};
    font-size: ${theme.fonts.small};
    text-align: start;
    .buttons {
      display: flex;
      justify-content: end;
      margin: 30px 0 20px 0;
      gap: 15px;

      button {
        min-width: 150px;
      }
    }
  `}
`;
