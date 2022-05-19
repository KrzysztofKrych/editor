import { useState } from 'react'
import { useAppDispatch } from '../../store'
import { DEFAULT_TEXT } from '../../store/editor/consts'
import { addDraggableTextThunkAction } from '../../store/editor/editor.thunk'
import { DraggableText } from '../../store/editor/interfaces'
import { StyledDiv } from '../../styles/styled-components'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getUniqId, isCssProperty } from '../../utils/helpers'
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
        color: isCssProperty('color', controlledTextValues.color) ? controlledTextValues.color : DEFAULT_TEXT.color, // TODO ERROR IF NOT COLOR
        fontWeight: isCssProperty('font-weight', String(controlledTextValues.fontWeight))
          ? controlledTextValues.fontWeight
          : DEFAULT_TEXT.fontWeight,
        fontSize: isCssProperty('font-size', String(controlledTextValues.fontSize))
          ? controlledTextValues.fontSize
          : DEFAULT_TEXT.fontSize,
        background: isCssProperty('background-color', String(controlledTextValues.background))
          ? controlledTextValues.background
          : DEFAULT_TEXT.background,
        padding: isCssProperty('padding', String(controlledTextValues.padding))
          ? controlledTextValues.padding
          : DEFAULT_TEXT.padding,
        id: getUniqId(),
      })
    )
    setControlledTextValue(DEFAULT_TEXT)
  }

  const handleOnChange = (text: DraggableText) => {
    setControlledTextValue(text)
  }

  return (
    <StyledDiv padding='1rem 0' width='100%'>
      <TextUpdateInputs controlledTextValues={controlledTextValues} onChange={handleOnChange} />
      <Button
        disabled={!controlledTextValues.value}
        onClick={handleAddText}
        style={{ margin: '1rem 0', width: '100%' }}
        type={ButtonType.PRIMARY}
        text='Add'
      />
    </StyledDiv>
  )
}
