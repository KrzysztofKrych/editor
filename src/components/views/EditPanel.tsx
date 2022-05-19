import { useAppDispatch, useAppSelector } from '../../store'
import { editorSelector, toggleCurrentMenu } from '../../store/editor/editor.reducer'
import { COLORS } from '../../styles/colors'
import { StyledFlex, StyledText } from '../../styles/styled-components'
import { DraggableType, MenuType } from '../../utils/enums'
import { EditContainerInformations } from '../ui/EditContainerInformations'
import { EditIconInformations } from '../ui/EditIconInformations'
import { EditTextInformations } from '../ui/EditTextInformations'
import { Icon } from '../ui/Icon'

export const EditPanel = () => {
  const dispatch = useAppDispatch()
  const { currentMenu } = useAppSelector(editorSelector)
  return (
    <StyledFlex padding='1rem' direction='column' width='100%'>
      <StyledFlex width='100%' justifycontent='space-between'>
        <Icon
          onClick={() => {
            dispatch(toggleCurrentMenu({ value: MenuType.NEW, type: null, id: '' }))
          }}
          name='arrow_back'
          style={{ cursor: 'pointer' }}
        />
        <StyledText size='14' color={COLORS.PRIMARY}>
          Edit component
        </StyledText>
        <div />
      </StyledFlex>
      <StyledFlex padding='1rem 0' width='100%'>
        {currentMenu.type === DraggableType.ICON && <EditIconInformations />}
        {currentMenu.type === DraggableType.TEXT && <EditTextInformations />}
        {currentMenu.type === DraggableType.CONTAINER && <EditContainerInformations />}
      </StyledFlex>
    </StyledFlex>
  )
}
