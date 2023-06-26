import * as S from './styles';
import search from '../../../assets/icons/search.svg';
import React from 'react';

interface SearchInputProps {
  placeholder: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  onClickSearch: () => void;
  onchangeInput: () => void;
  searchValue: string;
  icon?: string;
}

const SearchInput = ({
  placeholder,
  setSearchValue,
  searchValue,
  icon,
  onClickSearch,
  onchangeInput
}: SearchInputProps) => {
  return (
    <S.SearchInputWrapper>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          setSearchValue(e.target.value);
          onchangeInput();
        }}
        value={searchValue}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onClickSearch();
            e.preventDefault();
          }
        }}
      />
      <button onClick={() => onClickSearch()}>
        <img src={icon ?? search} alt="Buscar" />
      </button>
    </S.SearchInputWrapper>
  );
};

export default SearchInput;
