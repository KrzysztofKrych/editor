import { useRef } from 'react'
import { ExporterService } from '../../services/Exporter/ExporterService'
import { useAppSelector } from '../../store'
import { editorSelector } from '../../store/editor/editor.reducer'
import { COLORS } from '../../styles/colors'
import { StyledDiv, StyledFlex, StyledGrid } from '../../styles/styled-components'
import { ButtonType, MenuType } from '../../utils/enums'
import { Editor } from '../views/Editor'
import { EditorMenu } from '../views/EditorMenu'
import { EditPanel } from '../views/EditPanel'
import { Button } from './Button'

export const MainLayout = () => {
  const { currentMenu } = useAppSelector(editorSelector)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <StyledGrid columns='4fr 1fr'>
      <StyledDiv ref={ref} width='100%' height='100%' className='editor'>
        <Editor />
      </StyledDiv>
      <StyledFlex borderleft={`1px solid ${COLORS.PRIMARY_OPACITY}`} direction='column' justifycontent='space-between'>
        {currentMenu.value === MenuType.NEW && <EditorMenu />}
        {currentMenu.value === MenuType.EDIT && <EditPanel />}
        <StyledFlex padding='1rem' justifycontent='flex-end' width='100%'>
          <Button
            type={ButtonType.PRIMARY}
            text='Export File'
            onClick={() => {
              ref.current && ExporterService.exportToPdf(ref.current)
            }}
          />
        </StyledFlex>
      </StyledFlex>
    </StyledGrid>
  )
}
