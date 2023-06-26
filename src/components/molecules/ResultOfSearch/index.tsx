import * as S from './styles';

type ResultSearchProps = {
  resultTitle: string;
  resultNumber: number;
};

const ResultOfSearch = ({ resultNumber, resultTitle }: ResultSearchProps) => {
  return (
    <S.ResultOfSearchContainer>
      <p>Exbindo resultados para {resultTitle}</p>
      {resultNumber !== 6 && (
        <p className="bold">
          {resultNumber} resultado{resultNumber > 1 && 's'} encontrado
        </p>
      )}
    </S.ResultOfSearchContainer>
  );
};

export default ResultOfSearch;
