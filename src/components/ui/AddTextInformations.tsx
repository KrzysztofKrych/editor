import { useState } from 'react'
import { useAppDispatch } from '../../store'
import { DEFAULT_TEXT } from '../../store/editor/consts'
import { addDraggableTextThunkAction } from '../../store/editor/editor.thunk'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getUniqId, isColor, isFontSize, isFontWeight } from '../../utils/helpers'
import { Button } from './Button'
import { InputLabel } from './InputLabel'

export const AddTextInformations = () => {
  const dispatch = useAppDispatch()
  const [controlledTextValues, setControlledTextValue] = useState(DEFAULT_TEXT)

  const handleAddText = () => {
    dispatch(
      addDraggableTextThunkAction({
        ...DEFAULT_TEXT,
        type: DraggableType.TEXT,
        value: controlledTextValues.value,
        color: isColor(controlledTextValues.color) ? controlledTextValues.color : DEFAULT_TEXT.color, // TODO ERROR IF NOT COLOR
        fontWeight: isFontWeight(String(controlledTextValues.fontWeight))
          ? controlledTextValues.fontWeight
          : DEFAULT_TEXT.fontWeight,
        fontSize: isFontSize(String(controlledTextValues.fontSize))
          ? controlledTextValues.fontSize
          : DEFAULT_TEXT.fontSize,
        id: getUniqId(),
      })
    )
    setControlledTextValue(DEFAULT_TEXT)
  }
  return (
    <>
      <InputLabel
        inputWidth='200px'
        title='Text:'
        inputType='text'
        inputValue={controlledTextValues.value}
        placeholder='Type your text...'
        onChange={(event) => {
          setControlledTextValue({ ...controlledTextValues, value: event.target.value })
        }}
      />
      <InputLabel
        inputWidth='200px'
        title='Text color:'
        inputType='text'
        inputValue={controlledTextValues.color}
        placeholder='Choose your color'
        onChange={(event) => {
          setControlledTextValue({ ...controlledTextValues, color: event.target.value })
        }}
      />

      <InputLabel
        inputWidth='200px'
        title='Font weight:'
        inputType='text'
        inputValue={controlledTextValues.fontWeight}
        placeholder='Choose your font weight'
        onChange={(event) => {
          setControlledTextValue({ ...controlledTextValues, fontWeight: Number(event.target.value) })
        }}
      />

      <InputLabel
        inputWidth='200px'
        title='Font size:'
        onChange={(event) => {
          setControlledTextValue({ ...controlledTextValues, fontSize: Number(event.target.value) })
        }}
        inputType='text'
        inputValue={controlledTextValues.fontSize}
        placeholder='Choose your font size'
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
