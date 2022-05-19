import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { DEFAULT_POSITION } from '../../store/editor/consts'
import { addDraggableIconThunkAction } from '../../store/editor/editor.thunk'
import { iconsSelector } from '../../store/icons/icons.reducer'
import { StyledDiv, StyledSelect } from '../../styles/styled-components'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getSlicedArray, getUniqId } from '../../utils/helpers'
import { Button } from './Button'
import { InputLabel } from './InputLabel'

const DEFAULT_ICON = {
  fontSize: 0,
  value: '',
}

export const AddIconInformations = () => {
  const { icons } = useAppSelector(iconsSelector)
  const [filtredIcons, setFiltredIcons] = useState<string[]>([])
  const dispatch = useAppDispatch()
  const [selectedIcon, setSelectedIcon] = useState(DEFAULT_ICON)

  const handleSetIcons = (icons: string[]) => {
    setFiltredIcons(getSlicedArray(icons, { start: 0, end: 20 }))
  }

  // THIS ACTION SHOULD BE DONE ON BACKEND SIDE
  const handleSearch = (value: string) => {
    const filtred = icons.filter((icon) => icon.includes(value))
    handleSetIcons(filtred)
  }

  const handleAddIcon = () => {
    dispatch(
      addDraggableIconThunkAction({
        ...DEFAULT_POSITION,
        ...selectedIcon,
        type: DraggableType.ICON,
        id: getUniqId(),
      })
    )
    setSelectedIcon(DEFAULT_ICON)
  }

  useEffect(() => {
    if (icons && icons.length) {
      handleSetIcons(icons)
    }
  }, [icons])

  return (
    <StyledDiv padding='1rem 0' width='100%'>
      <StyledSelect
        padding='0 0 1rem 0'
        onChange={(value) => {
          setSelectedIcon({ ...selectedIcon, value: value as string })
        }}
        value={selectedIcon.value || null}
        onSearch={handleSearch}
        showSearch
        placeholder='Search...'
      >
        {filtredIcons.map((icon) => (
          <Select.Option key={icon} value={icon}>
            {icon}
          </Select.Option>
        ))}
      </StyledSelect>

      <InputLabel
        inputWidth='200px'
        title='Font size:'
        inputType='number'
        inputValue={selectedIcon.fontSize}
        placeholder='Size of icon'
        onChange={(event) => setSelectedIcon({ ...selectedIcon, fontSize: Number(event.target.value) })}
      />
      <Button
        disabled={!selectedIcon.value || !selectedIcon.fontSize}
        onClick={handleAddIcon}
        style={{ margin: '1rem 0', width: '100%' }}
        type={ButtonType.PRIMARY}
        text='Add'
      />
    </StyledDiv>
  )
}
