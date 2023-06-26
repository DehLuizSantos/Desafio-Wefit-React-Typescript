import React from 'react';
import * as S from './styles';

type LoaderProps = {
  children: React.ReactNode;
  loading: boolean;
};

const Loader = ({ children, loading }: LoaderProps) => {
  const [finishedTimeout, setFinishedTimeout] = React.useState(false);

  React.useEffect(() => {
    const id = setTimeout(() => {
      setFinishedTimeout(true);
    }, 150);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      {!loading && finishedTimeout ? (
        <>{children}</>
      ) : (
        <S.LoaderContainer>
          <S.LoaderSpinner>
            <S.LoaderBall />
          </S.LoaderSpinner>
        </S.LoaderContainer>
      )}
    </>
  );
};
export default Loader;
