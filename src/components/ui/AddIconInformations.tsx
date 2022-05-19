import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { DEFAULT_POSITION } from '../../store/editor/consts'
import { addDraggableIconThunkAction } from '../../store/editor/editor.thunk'
import { iconsSelector } from '../../store/icons/icons.reducer'
import { setSelectedIconThunkAction } from '../../store/icons/icons.thunk'
import { StyledInput, StyledSelect } from '../../styles/styled-components'
import { ButtonType, DraggableType } from '../../utils/enums'
import { getSlicedArray, getUniqId } from '../../utils/helpers'
import { Button } from './Button'

export const AddIconInformations = () => {
  const { icons, selectedIcon } = useAppSelector(iconsSelector)
  const [filtredIcons, setFiltredIcons] = useState<string[]>([])
  const dispatch = useAppDispatch()

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
        type: DraggableType.ICON,
        ...selectedIcon,
        id: getUniqId(),
      })
    )
  }

  useEffect(() => {
    if (icons && icons.length) {
      handleSetIcons(icons)
    }
  }, [icons])

  return (
    <>
      <StyledSelect
        onChange={(value) => {
          dispatch(setSelectedIconThunkAction({ ...selectedIcon, value: value as string }))
        }}
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
      <StyledInput
        onChange={(event) =>
          dispatch(setSelectedIconThunkAction({ ...selectedIcon, fontSize: Number(event.target.value) }))
        }
        type='number'
        placeholder='Size of icon'
      />
      <Button
        disabled={!selectedIcon.value || !selectedIcon.fontSize}
        onClick={handleAddIcon}
        style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
        type={ButtonType.PRIMARY}
        text='Add'
      />
    </>
  )
}
