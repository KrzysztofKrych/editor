import { Button, Select, Typography } from 'antd'
import styled from 'styled-components'
import { COLORS } from './colors'

export const StyledDiv = styled.div<{ background?: string; border?: string }>`
  background: ${(props) => props.background};
  border: ${(props) => props.border};
`

export const StyledSelect = styled(Select)`
  width: 100%;
`

export const StyledGrid = styled.div<{ columns: string; rows?: string; height?: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => (props.rows ? props.rows : 'inherit')};
  height: ${(props) => (props.height ? props.height : '100%')};
`
export const StyledText = styled(Typography.Text)<{
  size: string
  padding?: string
  color?: string
  weight?: string
  margin?: string
}>`
  display: inline-block;
  font-size: ${(props) => props.size}px;
  color: ${(props) => (props.color ? props.color : COLORS.WHITE)};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};

  &.ant-typography-disabled {
    opacity: 0.5;
    color: ${() => COLORS.GREY};
    pointer-events: none;
  }
`
export const StyledButton = styled(Button)<{ color?: string; background?: string; radius?: string }>`
  color: ${(props) => (props.color ? props.color : COLORS.GREEN)};
  background: ${(props) => (props.background ? props.background : COLORS.PRIMARY)};
  border-radius: ${(props) => (props.radius ? props.radius : '8px')};
  font-weight: 400;
  border: none;

  &:hover,
  &:active,
  &:focus {
    color: ${(props) => (props.color ? props.color : COLORS.GREEN)};
    background: ${(props) => (props.background ? props.background : COLORS.PRIMARY)};
  }
`
