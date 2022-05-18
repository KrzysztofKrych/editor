import { CSSProperties } from 'react'
import { StyledButton } from '../../styles/styled-components'
import { ButtonType } from '../../utils/enums'
import { getButtonProps } from '../../utils/helpers'

interface Props {
  text: string
  type: ButtonType
  onClick: () => void
  style?: CSSProperties
}

export const Button = ({ text, type, style, onClick }: Props) => {
  const buttonProps = getButtonProps(type)
  return (
    <StyledButton onClick={onClick} style={style} {...buttonProps}>
      {text}
    </StyledButton>
  )
}
