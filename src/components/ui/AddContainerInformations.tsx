import { useState } from 'react'
import { useAppDispatch } from '../../store'
import { DEFAULT_CONTAINER, DEFAULT_POSITION } from '../../store/editor/consts'
import { addDraggableContainerThunkAction } from '../../store/editor/editor.thunk'
import { DraggableContainer } from '../../store/editor/interfaces'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getUniqId } from '../../utils/helpers'
import { Button } from './Button'
import { ContainerUpdateInputs } from './ContainerUpdateInputs'

export const AddContainerInformations = () => {
  const dispatch = useAppDispatch()
  const [selectedContainer, setSelectedContainer] = useState(DEFAULT_CONTAINER)
  const handleAddContainer = () => {
    dispatch(
      addDraggableContainerThunkAction({
        ...DEFAULT_POSITION,
        id: getUniqId(),
        width: selectedContainer.width,
        height: selectedContainer.height,
        children: { icons: [], texts: [] },
        type: DraggableType.CONTAINER,
      })
    )
  }

  const handleOnChange = (container: DraggableContainer) => {
    setSelectedContainer(container)
  }

  return (
    <>
      <ContainerUpdateInputs controlledContainerValues={selectedContainer} onChange={handleOnChange} />
      <Button
        disabled={!selectedContainer.width || !selectedContainer.height}
        onClick={handleAddContainer}
        style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
        type={ButtonType.PRIMARY}
        text='Add'
      />
    </>
  )
}
