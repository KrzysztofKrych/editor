import { useRef } from 'react'
import Draggable from 'react-draggable'
import { useSelector } from 'react-redux'
import { editorSelector } from '../../store/editor/editor.reducer'
import { StyledDiv } from '../../styles/styled-components'

export const Editor = () => {
  const nodeRef = useRef(null)
  const { draggableTexts } = useSelector(editorSelector)
  return (
    <div>
      {draggableTexts.map(({ id, value }) => (
        <Draggable key={id} bounds='parent' nodeRef={nodeRef}>
          <StyledDiv style={{ display: 'inline-block' }} ref={nodeRef}>
            {value}
          </StyledDiv>
        </Draggable>
      ))}
    </div>
  )
}
