import styled, { css } from 'styled-components';

export const SearchInputWrapper = styled.div`
  ${() => css`
    margin: 24px 0;
    display: flex;
    position: relative;
    input {
      padding: 16px;
      width: 100%;
      border-radius: 8px;

      &:focus {
        outline: none;
        text-shadow: none;
      }
    }

    button {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 10px;
      top: 13px;
      cursor: pointer;
    }
  `}
`;
