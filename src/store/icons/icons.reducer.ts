import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface IconsInitialState {
  icons: string[]
  selectedIcon: string
}

export const initialState: IconsInitialState = {
  icons: [],
  selectedIcon: '',
}

const reducerName = 'icons'

export const iconsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setIcons: (state, { payload }: PayloadAction<string[]>) => {
      state.icons = payload
    },
    setSelectedIcon: (state, { payload }: PayloadAction<string>) => {
      state.selectedIcon = payload
    },
  },
})

export const { setIcons, setSelectedIcon } = iconsSlice.actions

export const iconsSelector = (state: RootState) => state.iconsReducer

export const iconsReducer = iconsSlice.reducer
