import './App.css'
import Draggable from 'react-draggable'
import React from 'react'
import { TestStyledDiv } from './styles/styled-components'
import { useAppDispatch } from './store'
import { addDraggableTextThunkAction } from './store/editor/editor.thunk'

const defaultText = { value: `test${Date.now()}`, id: `${Date.now()}`, position: { x: 0, y: 0 } }

function App() {
  const nodeRef = React.useRef(null)
  const dispatch = useAppDispatch()
  return (
    <div className='App'>
      <Draggable nodeRef={nodeRef}>
        <TestStyledDiv onClick={() => dispatch(addDraggableTextThunkAction(defaultText))} ref={nodeRef}>
          12
        </TestStyledDiv>
      </Draggable>
    </div>
  )
}

export default App
