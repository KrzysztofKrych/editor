import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { DraggableText } from './interfaces'

export interface EditorInitialState {
  draggableTexts: DraggableText[]
}

export const initialState: EditorInitialState = {
  draggableTexts: [],
}

const reducerName = 'editor'

export const editorSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    addDraggableText: (state, { payload }: PayloadAction<DraggableText>) => {
      state.draggableTexts = [...state.draggableTexts, payload]
    },
  },
})

export const { addDraggableText } = editorSlice.actions

export const editorSelector = (state: RootState) => state.editorReducer

export const editorReducer = editorSlice.reducer
