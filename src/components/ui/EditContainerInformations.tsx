import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { DEFAULT_CONTAINER } from '../../store/editor/consts'
import { editorSelector } from '../../store/editor/editor.reducer'
import { updateDraggableContainerThunkAction } from '../../store/editor/editor.thunk'
import { DraggableContainer } from '../../store/editor/interfaces'
import { StyledFlex } from '../../styles/styled-components'
import { ButtonType } from '../../utils/enums'
import { Button } from './Button'
import { ContainerUpdateInputs } from './ContainerUpdateInputs'

export const EditContainerInformations = () => {
  const dispatch = useAppDispatch()
  const { draggableContainers, currentMenu } = useAppSelector(editorSelector)
  const [updatedContainerValues, setUpdatedContainerValues] = useState(
    draggableContainers.find((text) => text.id === currentMenu.id) || DEFAULT_CONTAINER
  )
  const handleOnChange = (container: DraggableContainer) => {
    setUpdatedContainerValues(container)
  }
  const handleEditContainer = () => {
    dispatch(updateDraggableContainerThunkAction(updatedContainerValues))
  }
  return (
    <StyledFlex>
      <ContainerUpdateInputs controlledContainerValues={updatedContainerValues} onChange={handleOnChange} />
      <Button
        disabled={!updatedContainerValues.width || !updatedContainerValues.height}
        onClick={handleEditContainer}
        style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
        type={ButtonType.PRIMARY}
        text='Edit'
      />
    </StyledFlex>
  )
}
