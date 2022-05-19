import { Select } from 'antd'
import { ReactElement, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { DEFAULT_POSITION } from '../../store/editor/consts'
import { editorSelector } from '../../store/editor/editor.reducer'
import {
  addDraggableContainerThunkAction,
  addDraggableIconThunkAction,
  addDraggableTextThunkAction,
} from '../../store/editor/editor.thunk'
import { iconsSelector } from '../../store/icons/icons.reducer'
import { StyledFlex } from '../../styles/styled-components'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getUniqId } from '../../utils/helpers'
import { AddContainerInformations } from '../ui/AddContainerInformations'
import { AddIconInformations } from '../ui/AddIconInformations'
import { AddTextInformations } from '../ui/AddTextInformations'
import { Button } from '../ui/Button'
import { SelectLabel } from '../ui/SelectLabel'

export const EditorMenu = () => {
  const defaultSelectedDraggableType = DraggableType.ICON
  const [selectedDraggableType, setSelectedDraggableType] = useState<DraggableType>(defaultSelectedDraggableType)
  const dispatch = useAppDispatch()
  const { selectedIcon } = useSelector(iconsSelector)
  const { selectedText, newContainer } = useSelector(editorSelector)
  const handleAddDraggable = () => {
    switch (selectedDraggableType) {
      case DraggableType.TEXT: {
        dispatch(addDraggableTextThunkAction({ ...DEFAULT_POSITION, value: selectedText, id: getUniqId() }))
        break
      }
      case DraggableType.ICON: {
        dispatch(addDraggableIconThunkAction({ ...DEFAULT_POSITION, value: selectedIcon, id: getUniqId() }))
        break
      }
      case DraggableType.CONTAINER: {
        // TODO MOVE TO CONST

        // TODO CHECK IF POSSIBLE IS ADDING CONTAINER WITH DEFINED WIDTH AND HEIGHT
        dispatch(
          addDraggableContainerThunkAction({
            ...DEFAULT_POSITION,
            id: getUniqId(),
            width: newContainer.width,
            height: newContainer.height,
            children: { icons: [], texts: [] },
          })
        )
        break
      }
      default:
        break
    }
  }

  const getCurrentAdditionalInformations = (): ReactElement | null => {
    switch (selectedDraggableType) {
      case DraggableType.TEXT:
        return <AddTextInformations />
      case DraggableType.ICON: {
        return <AddIconInformations />
      }
      case DraggableType.CONTAINER: {
        return <AddContainerInformations />
      }
      default:
        return null
    }
  }

  const isDisabledAddButton = (): boolean => {
    switch (selectedDraggableType) {
      case DraggableType.TEXT:
        return !selectedText
      case DraggableType.ICON:
        return !selectedIcon
      case DraggableType.CONTAINER:
        return !newContainer.width || !newContainer.height
      default:
        return false
    }
  }

  return (
    <StyledFlex direction='column' padding=' 0 1rem '>
      <SelectLabel
        onChange={(value) => {
          setSelectedDraggableType(value as DraggableType)
        }}
        title='Choose new component'
        titlePadding='1rem 0'
        defaultValue={defaultSelectedDraggableType}
        options={Object.values(DraggableType).map((type) => (
          <Select.Option key={type} value={type}>
            {type}
          </Select.Option>
        ))}
      />
      {getCurrentAdditionalInformations()}
      <Button
        disabled={isDisabledAddButton()}
        onClick={handleAddDraggable}
        style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
        type={ButtonType.PRIMARY}
        text='Add'
      />
    </StyledFlex>
  )
}
