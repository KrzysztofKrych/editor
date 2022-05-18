import { ReactElement } from 'react'
import { COLORS } from '../../styles/colors'
import { StyledSelect, StyledText } from '../../styles/styled-components'

interface Props {
  defaultValue: string
  options: ReactElement[]
  title: string
  titlePadding?: string
}

export const SelectLabel = ({ defaultValue, options, title, titlePadding }: Props) => (
  <>
    <StyledText padding={titlePadding} size='14' color={COLORS.PRIMARY}>
      {title}
    </StyledText>
    <StyledSelect defaultValue={defaultValue}>{options}</StyledSelect>
  </>
)
