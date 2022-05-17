import './App.css'
import Draggable from 'react-draggable'
import React from 'react'
import { TestStyledDiv } from './styles/styled-components'

function App() {
  const nodeRef = React.useRef(null)
  return (
    <div className='App'>
      <Draggable nodeRef={nodeRef}>
        <TestStyledDiv ref={nodeRef}>12</TestStyledDiv>
      </Draggable>
    </div>
  )
}

export default App
