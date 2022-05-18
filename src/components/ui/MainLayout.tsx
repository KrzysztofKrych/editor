import { StyledGrid } from '../../styles/styled-components'
import { Editor } from '../views/Editor'
import { EditorMenu } from '../views/EditorMenu'

export const MainLayout = () => (
  <StyledGrid columns='5fr 1fr'>
    <Editor />
    <EditorMenu />
  </StyledGrid>
)
