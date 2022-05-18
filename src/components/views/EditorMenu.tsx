import { Select } from 'antd'
import { useState } from 'react'
import { useAppDispatch } from '../../store'
import { addDraggableIconThunkAction, addDraggableTextThunkAction } from '../../store/editor/editor.thunk'
import { StyledFlex } from '../../styles/styled-components'
import { ButtonType, DraggableType } from '../../utils/enums'
import { Button } from '../ui/Button'
import { SelectLabel } from '../ui/SelectLabel'

const defaultText = { value: `test${Date.now()}`, id: `${Date.now()}`, position: { x: 0, y: 0 } }
const defaultIcon = { value: `someicon`, id: `${Date.now()}`, position: { x: 0, y: 0 } }

export const EditorMenu = () => {
  const defaultSelectedDraggableType = DraggableType.ICON
  const [selectedDraggableType, setSelectedDraggableType] = useState<DraggableType>(defaultSelectedDraggableType)
  const dispatch = useAppDispatch()
  const handleAddDraggable = () => {
    switch (selectedDraggableType) {
      case DraggableType.TEXT: {
        dispatch(addDraggableTextThunkAction({ ...defaultText }))
        break
      }
      case DraggableType.ICON: {
        dispatch(addDraggableIconThunkAction({ ...defaultIcon }))
        break
      }
      default:
        break
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
        <Button
          onClick={handleAddDraggable}
          style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
          type={ButtonType.PRIMARY}
          text='Add'
        />
      </StyledFlex>
      <span className='material-icons'>face</span>
      <span className='material-icons'>expand_less</span>
    </div>
  )
}
