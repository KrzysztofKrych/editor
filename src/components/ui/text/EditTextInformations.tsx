import { Modal } from 'antd'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store'
import { DEFAULT_TEXT } from '../../../store/editor/consts'
import { editorSelector, toggleCurrentMenu } from '../../../store/editor/editor.reducer'
import { updateDraggableTextThunkAction, deleteDraggableTextThunkAction } from '../../../store/editor/editor.thunk'
import { DraggableText } from '../../../store/editor/interfaces'
import { COLORS } from '../../../styles/colors'
import { StyledFlex, StyledText } from '../../../styles/styled-components'
import { ButtonType, MenuType } from '../../../utils/enums'
import { isCssProperty } from '../../../utils/helpers'
import { Button } from '../elements/Button'
import { TextUpdateInputs } from './TextUpdateInputs'

export const EditTextInformations = () => {
  const dispatch = useAppDispatch()
  const { draggableTexts, currentMenu } = useAppSelector(editorSelector)
  const [updatedTextValues, setUpdatedTextValues] = useState(
    draggableTexts.find((text) => text.id === currentMenu.id) || DEFAULT_TEXT
  )
  const [visible, setVisible] = useState(false)
  const handleOnChange = (text: DraggableText) => {
    setUpdatedTextValues(text)
  }
  const handleEditText = () => {
    dispatch(updateDraggableTextThunkAction(updatedTextValues))
  }
  const handleDeleteText = () => {
    setVisible(false)
    dispatch(deleteDraggableTextThunkAction(updatedTextValues.id))
    dispatch(toggleCurrentMenu({ value: MenuType.NEW, type: null, id: '' }))
  }

  const isDisabled = (): boolean =>
    !updatedTextValues.value ||
    !isCssProperty('color', updatedTextValues.color) ||
    !isCssProperty('font-weight', String(updatedTextValues.fontWeight)) ||
    !isCssProperty('font-size', String(`${updatedTextValues.fontSize}px`)) ||
    !isCssProperty('background', updatedTextValues.background) ||
    (updatedTextValues.padding ? !isCssProperty('padding', updatedTextValues.padding) : false)

  useEffect(() => {
    setUpdatedTextValues(draggableTexts.find((text) => text.id === currentMenu.id) || DEFAULT_TEXT)
  }, [currentMenu.id])

  return (
    <>
      <StyledFlex direction='column' width='100%'>
        <TextUpdateInputs controlledTextValues={updatedTextValues} onChange={handleOnChange} />

        <StyledFlex justifycontent='space-between' width='100%'>
          <Button
            disabled={isDisabled()}
            onClick={handleEditText}
            style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
            type={ButtonType.PRIMARY}
            text='Edit'
          />
          <Button
            onClick={() => setVisible(true)}
            style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
            type={ButtonType.DANGER}
            text='Delete'
          />
        </StyledFlex>
      </StyledFlex>
      <Modal title='Delete Text' visible={visible} onCancel={() => setVisible(false)} onOk={handleDeleteText}>
        <StyledText size='14' color={COLORS.PRIMARY}>
          Are you sure you want to delete this text?
        </StyledText>
      </Modal>
    </>
  )
}
