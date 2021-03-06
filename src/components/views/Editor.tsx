import Draggable from 'react-draggable'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { editorSelector } from '../../store/editor/editor.reducer'
import {
  toggleMenuTypeThunkAction,
  updateDraggableContainerThunkAction,
  updateDraggableIconThunkAction,
  updateDraggableTextThunkAction,
} from '../../store/editor/editor.thunk'
import { CurrentMenu } from '../../store/editor/interfaces'
import { COLORS } from '../../styles/colors'
import { StyledDiv } from '../../styles/styled-components'
import { DraggableType, MenuType } from '../../utils/enums'
import { Icon } from '../ui/elements/Icon'

export const Editor = () => {
  const { draggableTexts, draggableIcons, draggableContainers } = useSelector(editorSelector)
  const dispatch = useAppDispatch()

  const handleUpdateMenuView = (menu: CurrentMenu) => {
    dispatch(toggleMenuTypeThunkAction(menu))
  }

  return (
    <StyledDiv width='100%' height='100%'>
      {draggableTexts.map((text) => (
        <Draggable
          onStop={(event, position) => {
            dispatch(updateDraggableTextThunkAction({ ...text, position: { x: position.x, y: position.y } }))
          }}
          key={text.id}
          bounds='parent'
        >
          <StyledDiv
            className={`.${text.id}`}
            style={{
              position: 'absolute',
              color: text.color,
              fontWeight: text.fontWeight,
              fontSize: `${text.fontSize}px`,
              background: text.background,
              padding: text.padding,
              cursor: 'pointer',
            }}
            onClick={() => {
              handleUpdateMenuView({ value: MenuType.EDIT, type: DraggableType.TEXT, id: text.id })
            }}
          >
            {text.value}
          </StyledDiv>
        </Draggable>
      ))}
      {draggableIcons.map((icon) => (
        <Draggable
          key={icon.id}
          bounds='parent'
          onStop={(event, position) => {
            dispatch(updateDraggableIconThunkAction({ ...icon, position: { x: position.x, y: position.y } }))
          }}
        >
          <StyledDiv
            style={{ position: 'absolute', cursor: 'pointer' }}
            onClick={() => {
              handleUpdateMenuView({ value: MenuType.EDIT, type: DraggableType.ICON, id: icon.id })
            }}
          >
            <Icon style={{ fontSize: icon.fontSize }} name={icon.value} />
          </StyledDiv>
        </Draggable>
      ))}
      {draggableContainers.map((container) => (
        <Draggable
          key={container.id}
          bounds='parent'
          onStop={(event, position) => {
            dispatch(updateDraggableContainerThunkAction({ ...container, position: { x: position.x, y: position.y } }))
          }}
        >
          <StyledDiv
            onClick={() => {
              handleUpdateMenuView({ value: MenuType.EDIT, type: DraggableType.CONTAINER, id: container.id })
            }}
            border={`1px solid ${COLORS.PRIMARY}`}
            style={{
              position: 'absolute',
              width: `${container.width}px`,
              height: `${container.height}px`,
              cursor: 'pointer',
            }}
          />
        </Draggable>
      ))}
    </StyledDiv>
  )
}
