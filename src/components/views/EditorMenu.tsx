import { Select } from 'antd'
import { ReactElement, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { editorSelector } from '../../store/editor/editor.reducer'
import { addDraggableIconThunkAction, addDraggableTextThunkAction } from '../../store/editor/editor.thunk'
import { iconsSelector } from '../../store/icons/icons.reducer'
import { StyledFlex } from '../../styles/styled-components'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getUniqId } from '../../utils/helpers'
import { AddIconInformations } from '../ui/AddIconInformations'
import { AddTextInformations } from '../ui/AddTextInformations'
import { Button } from '../ui/Button'
import { SelectLabel } from '../ui/SelectLabel'

const defaultText = { value: `test${Date.now()}`, position: { x: 0, y: 0 } }
const defaultIcon = { value: `someicon`, position: { x: 0, y: 0 } }

export const EditorMenu = () => {
  const defaultSelectedDraggableType = DraggableType.ICON
  const [selectedDraggableType, setSelectedDraggableType] = useState<DraggableType>(defaultSelectedDraggableType)
  const dispatch = useAppDispatch()
  const { selectedIcon } = useSelector(iconsSelector)
  const { selectedText } = useSelector(editorSelector)
  const handleAddDraggable = () => {
    switch (selectedDraggableType) {
      case DraggableType.TEXT: {
        dispatch(addDraggableTextThunkAction({ ...defaultText, value: selectedText, id: getUniqId() }))
        break
      }
      case DraggableType.ICON: {
        dispatch(addDraggableIconThunkAction({ ...defaultIcon, value: selectedIcon, id: getUniqId() }))
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
      default:
        return false
    }
  }

  return (
    <div>
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
    </div>
  )
}
