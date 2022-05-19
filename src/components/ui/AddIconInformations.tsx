import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { iconsSelector } from '../../store/icons/icons.reducer'
import { setSelectedIconThunkAction } from '../../store/icons/icons.thunk'
import { StyledInput, StyledSelect } from '../../styles/styled-components'
import { getSlicedArray } from '../../utils/helpers'

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
    </>
  )
}
