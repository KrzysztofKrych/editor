import { Select } from 'antd'
import { ReactElement, useState } from 'react'
import { StyledFlex } from '../../styles/styled-components'
import { DraggableType } from '../../utils/enums'
import { AddTextInformations } from '../ui/text/AddTextInformations'
import { SelectLabel } from '../ui/elements/SelectLabel'
import { AddIconInformations } from '../ui/icon/AddIconInformations'
import { AddContainerInformations } from '../ui/container/AddContainerInformations'

export const EditorMenu = () => {
  const defaultSelectedDraggableType = DraggableType.ICON
  const [selectedDraggableType, setSelectedDraggableType] = useState<DraggableType>(defaultSelectedDraggableType)

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

  return (
    <StyledFlex direction='column' padding='0 1rem ' width='100%'>
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
    </StyledFlex>
  )
}
