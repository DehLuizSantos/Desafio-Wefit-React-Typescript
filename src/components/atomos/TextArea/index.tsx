import React from 'react';
import * as S from './styles';

type textAreaProps = {
  value: number;
  defaultValue?: number;
  onChangeValue: (data: any) => void;
};

const TextArea: React.FC<textAreaProps> = ({ value, defaultValue, onChangeValue }) => {
  const onChangeValues = React.useCallback(
    (data: any) => {
      if (onChangeValue) {
        onChangeValue(data);
      }
    },
    [onChangeValue]
  );
  return (
    <S.TextAreaContainer
      onChange={onChangeValues}
      type={'text'}
      defaultValue={defaultValue}
      value={value}
    />
  );
};

export default TextArea;
