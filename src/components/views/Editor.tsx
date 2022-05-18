import { useRef } from 'react'
import Draggable from 'react-draggable'
import { useSelector } from 'react-redux'
import { editorSelector } from '../../store/editor/editor.reducer'
import { StyledDiv } from '../../styles/styled-components'

export const Editor = () => {
  const textRef = useRef(null)
  const iconRef = useRef(null)
  const { draggableTexts, draggableIcons } = useSelector(editorSelector)
  return (
    <div>
      {draggableTexts.map(({ id, value }) => (
        <Draggable key={id} bounds='parent' nodeRef={textRef}>
          <StyledDiv style={{ display: 'inline-block' }} ref={textRef}>
            {value}
          </StyledDiv>
        </Draggable>
      ))}
      {draggableIcons.map(({ id, value }) => (
        <Draggable key={id} bounds='parent' nodeRef={iconRef}>
          <StyledDiv style={{ display: 'inline-block' }} ref={iconRef}>
            {value}
          </StyledDiv>
        </Draggable>
      ))}
    </div>
  )
}
