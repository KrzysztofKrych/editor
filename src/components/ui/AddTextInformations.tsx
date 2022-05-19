import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { DEFAULT_TEXT } from '../../store/editor/consts'
import { editorSelector } from '../../store/editor/editor.reducer'
import { addDraggableTextThunkAction, updateSelectedTextThunkAction } from '../../store/editor/editor.thunk'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getUniqId, isColor, isFontSize, isFontWeight } from '../../utils/helpers'
import { Button } from './Button'
import { InputLabel } from './InputLabel'

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
        fontWeight: selectedText.fontWeight,
        fontSize: selectedText.fontSize,
        id: getUniqId(),
      })
    )
  }
  return (
    <>
      <InputLabel
        inputWidth='200px'
        title='Text'
        inputType='text'
        inputValue={controlledTextValues.value}
        placeholder='Type your text...'
        onBlur={(event) => {
          dispatch(updateSelectedTextThunkAction({ ...selectedText, value: event.target.value }))
        }}
        onChange={(event) => {
          setControlledTextValue({ ...controlledTextValues, value: event.target.value })
        }}
      />
      <InputLabel
        inputWidth='200px'
        title='Text color'
        inputType='text'
        inputValue={controlledTextValues.color}
        placeholder='Choose your color'
        onBlur={(event) => {
          // TODO ERROR IF NOT COLOR
          if (isColor(event.target.value)) {
            dispatch(updateSelectedTextThunkAction({ ...selectedText, color: event.target.value }))
          }
        }}
        onChange={(event) => {
          setControlledTextValue({ ...controlledTextValues, color: event.target.value })
        }}
      />

      <InputLabel
        inputWidth='200px'
        title='Font weight'
        inputType='text'
        inputValue={controlledTextValues.fontWeight}
        placeholder='Choose your font weight'
        onBlur={(event) => {
          // TODO ERROR IF NOT weight
          if (isFontWeight(event.target.value)) {
            dispatch(updateSelectedTextThunkAction({ ...selectedText, fontWeight: Number(event.target.value) }))
          }
        }}
        onChange={(event) => {
          setControlledTextValue({ ...controlledTextValues, fontWeight: Number(event.target.value) })
        }}
      />

      <InputLabel
        inputWidth='200px'
        title='Font size'
        onChange={(event) => {
          setControlledTextValue({ ...controlledTextValues, fontSize: Number(event.target.value) })
        }}
        inputType='text'
        inputValue={controlledTextValues.fontSize}
        placeholder='Choose your font size'
        onBlur={(event) => {
          // TODO ERROR IF NOT weight
          if (isFontSize(event.target.value)) {
            dispatch(updateSelectedTextThunkAction({ ...selectedText, fontSize: Number(event.target.value) }))
          }
        }}
      />
      <Button
        disabled={!controlledTextValues.value}
        onClick={handleAddText}
        style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
        type={ButtonType.PRIMARY}
        text='Add'
      />
    </>
  )
}
