import { useState } from 'react'
import { useAppDispatch } from '../../store'
import { DEFAULT_CONTAINER, DEFAULT_POSITION } from '../../store/editor/consts'
import { addDraggableContainerThunkAction } from '../../store/editor/editor.thunk'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getUniqId } from '../../utils/helpers'
import { Button } from './Button'
import { InputLabel } from './InputLabel'

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
  return (
    <>
      <InputLabel
        inputWidth='200px'
        title='Width:'
        inputType='number'
        inputValue={selectedContainer.width}
        placeholder='Width of container'
        onChange={(event) => {
          setSelectedContainer({ ...selectedContainer, width: Number(event.target.value) })
        }}
      />

      <InputLabel
        inputWidth='200px'
        title='Height:'
        inputType='number'
        inputValue={selectedContainer.height}
        placeholder='Height of container'
        onChange={(event) => {
          setSelectedContainer({ ...selectedContainer, height: Number(event.target.value) })
        }}
      />
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
