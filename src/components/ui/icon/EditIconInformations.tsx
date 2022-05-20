import { Modal } from 'antd'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store'
import { DEFAULT_ICON } from '../../../store/editor/consts'
import { editorSelector, toggleCurrentMenu } from '../../../store/editor/editor.reducer'
import { updateDraggableIconThunkAction, deleteDraggableIconThunkAction } from '../../../store/editor/editor.thunk'
import { DraggableIcon } from '../../../store/editor/interfaces'
import { COLORS } from '../../../styles/colors'
import { StyledFlex, StyledText } from '../../../styles/styled-components'
import { ButtonType, MenuType } from '../../../utils/enums'
import { Button } from '../elements/Button'
import { InputLabel } from '../elements/InputLabel'

export const EditIconInformations = () => {
  const dispatch = useAppDispatch()
  const { currentMenu, draggableIcons } = useAppSelector(editorSelector)
  const [updatedIconValues, setUpdateIconValues] = useState<DraggableIcon>(
    draggableIcons.find((icon) => icon.id === currentMenu.id) || DEFAULT_ICON
  )
  const [visible, setVisible] = useState(false)

  const handleEditIconDraggable = () => {
    dispatch(updateDraggableIconThunkAction(updatedIconValues))
  }

  const handleDeleteIcon = () => {
    setVisible(false)
    dispatch(deleteDraggableIconThunkAction(updatedIconValues.id))
    dispatch(toggleCurrentMenu({ value: MenuType.NEW, type: null, id: '' }))
  }

  useEffect(() => {
    setUpdateIconValues(draggableIcons.find((icon) => icon.id === currentMenu.id) || DEFAULT_ICON)
  }, [currentMenu.id])

  return (
    <>
      <StyledFlex direction='column' width='100%'>
        <InputLabel
          title='Font size'
          onChange={(event) => {
            setUpdateIconValues({ ...updatedIconValues, fontSize: Number(event.target.value) })
          }}
          inputType='number'
          inputValue={updatedIconValues.fontSize}
          placeholder='Size of icon'
        />
        <StyledFlex justifycontent='space-between' width='100%'>
          <Button
            disabled={!updatedIconValues.fontSize}
            onClick={handleEditIconDraggable}
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

      <Modal title='Delete Icon' visible={visible} onCancel={() => setVisible(false)} onOk={handleDeleteIcon}>
        <StyledText size='14' color={COLORS.PRIMARY}>
          Are you sure you want to delete this icon?
        </StyledText>
      </Modal>
    </>
  )
}
