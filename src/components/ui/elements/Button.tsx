import { CSSProperties } from 'react'
import { StyledButton } from '../../../styles/styled-components'
import { ButtonType } from '../../../utils/enums'
import { getButtonProps } from '../../../utils/helpers'

interface Props {
  text: string
  type: ButtonType
  onClick: () => void
  style?: CSSProperties
  disabled?: boolean
}

export const Button = ({ text, type, style, onClick, disabled }: Props) => {
  const buttonProps = getButtonProps(type)
  return (
    <StyledButton disabled={disabled} onClick={onClick} style={style} {...buttonProps}>
      {text}
    </StyledButton>
  )
}
