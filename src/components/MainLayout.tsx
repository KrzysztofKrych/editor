import { StyledGrid } from '../styles/styled-components'
import { Editor } from './Editor'
import { EditorMenu } from './EditorMenu'

export const MainLayout = () => (
  <StyledGrid columns='5fr 1fr'>
    <Editor />
    <EditorMenu />
  </StyledGrid>
)
