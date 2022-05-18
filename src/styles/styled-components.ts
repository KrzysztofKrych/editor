import styled from 'styled-components'

export const TestStyledDiv = styled.div`
  background: red;
  display: inline-block;
`

export const StyledGrid = styled.div<{ columns: string; rows?: string; height?: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => (props.rows ? props.rows : 'inherit')};
  height: ${(props) => (props.height ? props.height : '100%')};
`
