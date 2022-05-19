import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { DEFAULT_TEXT } from '../../store/editor/consts'
import { editorSelector } from '../../store/editor/editor.reducer'
import { updateDraggableTextThunkAction } from '../../store/editor/editor.thunk'
import { DraggableText } from '../../store/editor/interfaces'
import { StyledFlex } from '../../styles/styled-components'
import { ButtonType } from '../../utils/enums'
import { Button } from './Button'
import { TextUpdateInputs } from './TextUpdateInputs'

export const EditTextInformations = () => {
  const dispatch = useAppDispatch()
  const { draggableTexts, currentMenu } = useAppSelector(editorSelector)
  const [updatedTextValues, setUpdatedTextValues] = useState(
    draggableTexts.find((text) => text.id === currentMenu.id) || DEFAULT_TEXT
  )
  const handleOnChange = (text: DraggableText) => {
    setUpdatedTextValues(text)
  }
  const handleEditText = () => {
    dispatch(updateDraggableTextThunkAction(updatedTextValues))
  }
  return (
    <StyledFlex direction='column' width='100%'>
      <TextUpdateInputs controlledTextValues={updatedTextValues} onChange={handleOnChange} />
      <Button
        disabled={!updatedTextValues.value}
        onClick={handleEditText}
        style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
        type={ButtonType.PRIMARY}
        text='Edit'
      />
    </StyledFlex>
  )
}
