import { useState } from 'react'
import { useAppDispatch } from '../../store'
import { DEFAULT_TEXT } from '../../store/editor/consts'
import { addDraggableTextThunkAction } from '../../store/editor/editor.thunk'
import { DraggableText } from '../../store/editor/interfaces'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getUniqId, isColor, isFontSize, isFontWeight } from '../../utils/helpers'
import { Button } from './Button'
import { TextUpdateInputs } from './TextUpdateInputs'

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

  const handleOnChange = (text: DraggableText) => {
    setControlledTextValue(text)
  }

  return (
    <>
      <TextUpdateInputs controlledTextValues={controlledTextValues} onChange={handleOnChange} />
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
