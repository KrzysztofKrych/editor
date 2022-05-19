import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { DEFAULT_ICON } from '../../store/editor/consts'
import { editorSelector } from '../../store/editor/editor.reducer'
import { updateDraggableIconThunkAction } from '../../store/editor/editor.thunk'
import { DraggableIcon } from '../../store/editor/interfaces'
import { StyledFlex } from '../../styles/styled-components'
import { ButtonType } from '../../utils/enums'
import { Button } from './Button'
import { InputLabel } from './InputLabel'

export const EditIconInformations = () => {
  const dispatch = useAppDispatch()
  const { currentMenu, draggableIcons } = useAppSelector(editorSelector)
  const [updatedIconValues, setUpdateIconValues] = useState<DraggableIcon>(
    draggableIcons.find((icon) => icon.id === currentMenu.id) || DEFAULT_ICON
  )

  const handleEditIconDraggable = () => {
    dispatch(updateDraggableIconThunkAction(updatedIconValues))
  }

  return (
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
      <Button
        disabled={!updatedIconValues.fontSize}
        onClick={handleEditIconDraggable}
        style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
        type={ButtonType.PRIMARY}
        text='Edit'
      />
    </StyledFlex>
  )
}
