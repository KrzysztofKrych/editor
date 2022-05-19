import { useRef } from 'react'
import Draggable from 'react-draggable'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { editorSelector } from '../../store/editor/editor.reducer'
import {
  updateDraggableContainerThunkAction,
  updateDraggableIconThunkAction,
  updateDraggableTextThunkAction,
} from '../../store/editor/editor.thunk'
import { COLORS } from '../../styles/colors'
import { StyledDiv } from '../../styles/styled-components'

export const Editor = () => {
  const textRef = useRef(null)
  const iconRef = useRef(null)
  const { draggableTexts, draggableIcons, draggableContainers } = useSelector(editorSelector)
  const dispatch = useAppDispatch()
  return (
    <div>
      {draggableTexts.map((text) => (
        <Draggable
          onStop={(event, position) => {
            dispatch(updateDraggableTextThunkAction({ ...text, position: { x: position.x, y: position.y } }))
          }}
          key={text.id}
          bounds='parent'
          nodeRef={textRef}
        >
          <StyledDiv style={{ display: 'inline-block' }} ref={textRef}>
            {text.value}
          </StyledDiv>
        </Draggable>
      ))}
      {draggableIcons.map((icon) => (
        <Draggable
          key={icon.id}
          bounds='parent'
          nodeRef={iconRef}
          onStop={(event, position) => {
            dispatch(updateDraggableIconThunkAction({ ...icon, position: { x: position.x, y: position.y } }))
          }}
        >
          <StyledDiv style={{ display: 'inline-block' }} ref={iconRef}>
            <span className='material-icons'>{icon.value}</span>
          </StyledDiv>
        </Draggable>
      ))}
      {draggableContainers.map((container) => (
        <Draggable
          key={container.id}
          bounds='parent'
          nodeRef={iconRef}
          onStop={(event, position) => {
            dispatch(updateDraggableContainerThunkAction({ ...container, position: { x: position.x, y: position.y } }))
          }}
        >
          <StyledDiv
            border={`1px solid ${COLORS.PRIMARY}`}
            style={{ display: 'inline-block', width: `${container.width}px`, height: `${container.height}px` }}
            ref={iconRef}
          />
        </Draggable>
      ))}
    </div>
  )
}
