import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Icon } from './interfaces'

export interface IconsInitialState {
  icons: string[]
  selectedIcon: Icon
}

export const initialState: IconsInitialState = {
  icons: [],
  selectedIcon: {
    fontSize: 0,
    value: '',
  },
}

const reducerName = 'icons'

export const iconsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setIcons: (state, { payload }: PayloadAction<string[]>) => {
      state.icons = payload
    },
    setSelectedIcon: (state, { payload }: PayloadAction<Icon>) => {
      state.selectedIcon = payload
    },
  },
})

export const { setIcons, setSelectedIcon } = iconsSlice.actions

export const iconsSelector = (state: RootState) => state.iconsReducer

export const iconsReducer = iconsSlice.reducer
