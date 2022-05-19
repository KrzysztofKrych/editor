import { useAppDispatch } from '../../store'
import { toggleCurrentMenu } from '../../store/editor/editor.reducer'
import { COLORS } from '../../styles/colors'
import { StyledFlex, StyledText } from '../../styles/styled-components'
import { MenuType } from '../../utils/enums'
import { Icon } from '../ui/Icon'

export const EditPanel = () => {
  const dispatch = useAppDispatch()

  return (
    <StyledFlex padding='1rem'>
      <StyledFlex justifycontent='space-between' width='100%'>
        <Icon
          onClick={() => {
            dispatch(toggleCurrentMenu(MenuType.NEW))
          }}
          name='arrow_back'
          style={{ cursor: 'pointer' }}
        />
        <StyledText size='14' color={COLORS.PRIMARY}>
          Edit component
        </StyledText>
      </StyledFlex>
    </StyledFlex>
  )
}
