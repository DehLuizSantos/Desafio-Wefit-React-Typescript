import React, { ButtonHTMLAttributes } from "react";
import * as S from './styles'

type iconButtonProps = {
  icon: string
  iconAlt: string
  onClickIcon?: (data: any) => void

} & ButtonHTMLAttributes<HTMLButtonElement>

const IconButton: React.FC<iconButtonProps> = ({icon, iconAlt, onClickIcon, ...props}) => {
  return(
    <S.IconButtonBtn onClick={onClickIcon} {...props}>
      <img src={icon} alt={iconAlt} />
    </S.IconButtonBtn>
  )
}

export default IconButton