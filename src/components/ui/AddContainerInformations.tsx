import { useAppDispatch, useAppSelector } from '../../store'
import { editorSelector } from '../../store/editor/editor.reducer'
import { updateNewDraggableContainerThunkAction } from '../../store/editor/editor.thunk'
import { StyledInput } from '../../styles/styled-components'

export const AddContainerInformations = () => {
  const dispatch = useAppDispatch()
  const { newContainer } = useAppSelector(editorSelector)
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
    </>
  )
}
