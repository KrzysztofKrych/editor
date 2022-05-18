import { useRef } from 'react'
import Draggable from 'react-draggable'
import { useAppDispatch } from '../store'
import { addDraggableTextThunkAction } from '../store/editor/editor.thunk'
import { TestStyledDiv } from '../styles/styled-components'

const defaultText = { value: `test${Date.now()}`, id: `${Date.now()}`, position: { x: 0, y: 0 } }

export const Editor = () => {
  const nodeRef = useRef(null)
  const dispatch = useAppDispatch()
  return (
    <div>
      <Draggable bounds='parent' nodeRef={nodeRef}>
        <TestStyledDiv onClick={() => dispatch(addDraggableTextThunkAction(defaultText))} ref={nodeRef}>
          12
        </TestStyledDiv>
      </Draggable>
    </div>
  )
}
