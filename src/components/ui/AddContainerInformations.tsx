import { useAppDispatch, useAppSelector } from '../../store'
import { DEFAULT_POSITION } from '../../store/editor/consts'
import { editorSelector } from '../../store/editor/editor.reducer'
import {
  addDraggableContainerThunkAction,
  updateNewDraggableContainerThunkAction,
} from '../../store/editor/editor.thunk'
import { StyledInput } from '../../styles/styled-components'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getUniqId } from '../../utils/helpers'
import { Button } from './Button'

export const AddContainerInformations = () => {
  const dispatch = useAppDispatch()
  const { newContainer } = useAppSelector(editorSelector)
  const handleAddContainer = () => {
    dispatch(
      addDraggableContainerThunkAction({
        ...DEFAULT_POSITION,
        id: getUniqId(),
        width: newContainer.width,
        height: newContainer.height,
        children: { icons: [], texts: [] },
        type: DraggableType.CONTAINER,
      })
    )
  }
  return (
    <>
      <StyledInput
        onChange={(event) => {
          dispatch(updateNewDraggableContainerThunkAction({ ...newContainer, width: Number(event.target.value) }))
        }}
        type='number'
        placeholder='Width of container'
      />
      <StyledInput
        onChange={(event) => {
          dispatch(updateNewDraggableContainerThunkAction({ ...newContainer, height: Number(event.target.value) }))
        }}
        type='number'
        placeholder='Height of container'
      />
      <Button
        disabled={!newContainer.width || !newContainer.height}
        onClick={handleAddContainer}
        style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
        type={ButtonType.PRIMARY}
        text='Add'
      />
    </>
  )
}
