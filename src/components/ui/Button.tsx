import { CSSProperties } from 'react'
import { StyledButton } from '../../styles/styled-components'
import { ButtonType } from '../../utils/enums'
import { getButtonProps } from '../../utils/helpers'

interface Props {
  text: string
  type: ButtonType
  style?: CSSProperties
}

export const Button = ({ text, type, style }: Props) => {
  const buttonProps = getButtonProps(type)
  return (
    <StyledButton style={style} {...buttonProps}>
      {text}
    </StyledButton>
  )
}
