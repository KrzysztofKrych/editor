import { Button, Input, Select, Typography } from 'antd'
import styled from 'styled-components'
import { COLORS } from './colors'

export const StyledDiv = styled.div<{
  background?: string
  border?: string
  borderleft?: string
  height?: string
  padding?: string
}>`
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-left: ${(props) => props.borderleft};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
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

export const StyledFlex = styled.div<{
  direction?: string
  justifycontent?: string
  aligncontent?: string
  alignitems?: string
  padding?: string
  width?: string
}>`
  display: flex;
  justify-content: ${(props) => (props.justifycontent ? props.justifycontent : 'center')};
  align-items: ${(props) => (props.alignitems ? props.alignitems : 'center')};
  align-content: ${(props) => (props.aligncontent ? props.aligncontent : 'center')};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
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
export const StyledInput = styled(Input)<{ radius?: string; width?: string }>`
  width: ${(props) => props.width};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '0px')};
  :active,
  :focus,
  :hover,
  :focus-within {
    border: 1px solid ${COLORS.GREEN} !important;
  }
`
