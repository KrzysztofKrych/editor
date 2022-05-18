import { ReactElement } from 'react'
import { COLORS } from '../../styles/colors'
import { StyledSelect, StyledText } from '../../styles/styled-components'

interface Props {
  defaultValue: string
  options: ReactElement[]
  title: string
  onChange?: (value: unknown) => void
  titlePadding?: string
  showArrow?: boolean
}

export const SelectLabel = ({ defaultValue, options, title, onChange, titlePadding, showArrow = false }: Props) => (
  <>
    <StyledText padding={titlePadding} size='14' color={COLORS.PRIMARY}>
      {title}
    </StyledText>
    <StyledSelect onChange={onChange} showArrow={showArrow} defaultValue={defaultValue}>
      {options}
    </StyledSelect>
  </>
)
