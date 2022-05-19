import { useAppDispatch, useAppSelector } from '../../store'
import { editorSelector } from '../../store/editor/editor.reducer'
import { setSelectedTextThunkAction } from '../../store/editor/editor.thunk'
import { StyledInput } from '../../styles/styled-components'

export const AddTextInformations = () => {
  const dispatch = useAppDispatch()
  const { selectedText } = useAppSelector(editorSelector)
  return (
    <StyledInput
      onChange={(event) => {
        dispatch(setSelectedTextThunkAction(event.target.value))
      }}
      value={selectedText}
      placeholder='Type...'
    />
  )
}
