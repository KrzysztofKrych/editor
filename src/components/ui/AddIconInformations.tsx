import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { iconsSelector } from '../../store/icons/icons.reducer'
import { setSelectedIconThunkAction } from '../../store/icons/icons.thunk'
import { StyledSelect } from '../../styles/styled-components'
import { getSlicedArray } from '../../utils/helpers'

export const AddIconInformations = () => {
  const { icons } = useAppSelector(iconsSelector)
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
    <StyledSelect
      onChange={(value) => {
        dispatch(setSelectedIconThunkAction(value as string))
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
  )
}
