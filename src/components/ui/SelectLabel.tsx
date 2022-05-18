import { ReactElement } from 'react'
import { COLORS } from '../../styles/colors'
import { StyledSelect, StyledText } from '../../styles/styled-components'

interface Props {
  defaultValue: string
  options: ReactElement[]
  title: string
  titlePadding?: string
  showArrow?: boolean
}

export const SelectLabel = ({ defaultValue, options, title, titlePadding, showArrow = false }: Props) => (
  <>
    <StyledText padding={titlePadding} size='14' color={COLORS.PRIMARY}>
      {title}
    </StyledText>
    <StyledSelect showArrow={showArrow} defaultValue={defaultValue}>
      {options}
    </StyledSelect>
  </>
)
