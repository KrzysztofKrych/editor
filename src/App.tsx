import './App.css'
import Draggable from 'react-draggable'
import React from 'react'
import { TestStyledDiv } from './styles/styled-components'
import { useAppDispatch, useAppSelector } from './store'
import { addDraggableText, editorSelector } from './store/editor/editor.reducer'

function App() {
  const nodeRef = React.useRef(null)
  const { draggableTexts } = useAppSelector(editorSelector)
  const dispatch = useAppDispatch()
  return (
    <div className='App'>
      <Draggable
        axis='x'
        // onStop={(e, d) => {
        //   console.log(d)
        // }}
        nodeRef={nodeRef}
      >
        <TestStyledDiv onClick={() => dispatch(addDraggableText({ value: `test${Date.now()}` }))} ref={nodeRef}>
          12
        </TestStyledDiv>
      </Draggable>
      {draggableTexts.map((text) => (
        <div key={`${Date.now()}_${Math.random() * 10}`}>{text.value}</div>
      ))}
    </div>
  )
}

export default App
