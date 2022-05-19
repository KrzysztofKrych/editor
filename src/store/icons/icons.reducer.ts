import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface IconsInitialState {
  icons: string[]
}

export const initialState: IconsInitialState = {
  icons: [],
}

const reducerName = 'icons'

export const iconsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setIcons: (state, { payload }: PayloadAction<string[]>) => {
      state.icons = payload
    },
  },
})

export const { setIcons } = iconsSlice.actions

export const iconsSelector = (state: RootState) => state.iconsReducer

export const iconsReducer = iconsSlice.reducer
