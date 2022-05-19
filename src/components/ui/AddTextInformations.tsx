import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { DEFAULT_TEXT } from '../../store/editor/consts'
import { editorSelector } from '../../store/editor/editor.reducer'
import { addDraggableTextThunkAction, updateSelectedTextThunkAction } from '../../store/editor/editor.thunk'
import { StyledInput } from '../../styles/styled-components'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getUniqId, isColor } from '../../utils/helpers'
import { Button } from './Button'

export const AddTextInformations = () => {
  const dispatch = useAppDispatch()
  const { selectedText } = useAppSelector(editorSelector)
  const [controlledTextValues, setControlledTextValue] = useState(DEFAULT_TEXT)

  const handleAddText = () => {
    dispatch(
      addDraggableTextThunkAction({
        ...DEFAULT_TEXT,
        type: DraggableType.TEXT,
        value: selectedText.value,
        color: selectedText.color,
        id: getUniqId(),
      })
    )
  }
  return (
    <>
      <StyledInput
        onBlur={(event) => {
          dispatch(updateSelectedTextThunkAction({ ...selectedText, value: event.target.value }))
        }}
        onChange={(event) => {
          setControlledTextValue({ ...controlledTextValues, value: event.target.value })
        }}
        value={controlledTextValues.value}
        placeholder='Type your text...'
      />
      <StyledInput
        onBlur={(event) => {
          // TODO ERROR IF NOT COLOR
          if (isColor(event.target.value)) {
            dispatch(updateSelectedTextThunkAction({ ...selectedText, color: event.target.value }))
          }
        }}
        onChange={(event) => {
          setControlledTextValue({ ...controlledTextValues, color: event.target.value })
        }}
        value={controlledTextValues.color}
        placeholder='Choose your color'
      />
      <Button
        disabled={!selectedText.value}
        onClick={handleAddText}
        style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
        type={ButtonType.PRIMARY}
        text='Add'
      />
    </>
  )
}
