import React from "react";
import * as S from './styles'

type textAreaProps = {
  value: number;  
}

const TextArea: React.FC<textAreaProps> = ({value}) => {
  return(
    <S.TextAreaContainer defaultValue={value} />
  )
}

export default TextArea