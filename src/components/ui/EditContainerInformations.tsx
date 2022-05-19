import { Modal } from 'antd'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { DEFAULT_CONTAINER } from '../../store/editor/consts'
import { editorSelector, toggleCurrentMenu } from '../../store/editor/editor.reducer'
import {
  deleteDraggableContainerThunkAction,
  updateDraggableContainerThunkAction,
} from '../../store/editor/editor.thunk'
import { DraggableContainer } from '../../store/editor/interfaces'
import { COLORS } from '../../styles/colors'
import { StyledFlex, StyledText } from '../../styles/styled-components'
import { ButtonType, MenuType } from '../../utils/enums'
import { Button } from './Button'
import { ContainerUpdateInputs } from './ContainerUpdateInputs'

export const EditContainerInformations = () => {
  const dispatch = useAppDispatch()
  const { draggableContainers, currentMenu } = useAppSelector(editorSelector)
  const [updatedContainerValues, setUpdatedContainerValues] = useState(
    draggableContainers.find((text) => text.id === currentMenu.id) || DEFAULT_CONTAINER
  )
  const [visible, setVisible] = useState(false)
  const handleOnChange = (container: DraggableContainer) => {
    setUpdatedContainerValues(container)
  }
  const handleEditContainer = () => {
    dispatch(updateDraggableContainerThunkAction(updatedContainerValues))
  }
  const handleDeleteContainer = () => {
    setVisible(false)
    dispatch(deleteDraggableContainerThunkAction(updatedContainerValues.id))
    dispatch(toggleCurrentMenu({ value: MenuType.NEW, type: null, id: '' }))
  }
  return (
    <>
      <StyledFlex direction='column' width='100%'>
        <ContainerUpdateInputs controlledContainerValues={updatedContainerValues} onChange={handleOnChange} />
        <StyledFlex justifycontent='space-between' width='100%'>
          <Button
            disabled={!updatedContainerValues.width || !updatedContainerValues.height}
            onClick={handleEditContainer}
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
      <Modal title='Delete Container' visible={visible} onCancel={() => setVisible(false)} onOk={handleDeleteContainer}>
        <StyledText size='14' color={COLORS.PRIMARY}>
          Are you sure you want to delete this container?
        </StyledText>
      </Modal>
    </>
  )
}
