import { useAppSelector } from '../../store'
import { editorSelector } from '../../store/editor/editor.reducer'
import { COLORS } from '../../styles/colors'
import { StyledDiv, StyledGrid } from '../../styles/styled-components'
import { MenuType } from '../../utils/enums'
import { Editor } from '../views/Editor'
import { EditorMenu } from '../views/EditorMenu'
import { EditPanel } from '../views/EditPanel'

export const MainLayout = () => {
  const { currentMenu } = useAppSelector(editorSelector)
  return (
    <StyledGrid columns='4fr 1fr'>
      <Editor />
      <StyledDiv borderleft={`1px solid ${COLORS.PRIMARY_OPACITY}`}>
        {currentMenu.value === MenuType.NEW && <EditorMenu />}
        {currentMenu.value === MenuType.EDIT && <EditPanel />}
      </StyledDiv>
    </StyledGrid>
  )
}
