import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { DraggableIcon, DraggableText } from './interfaces'

export interface EditorInitialState {
  draggableTexts: DraggableText[]
  draggableIcons: DraggableIcon[]
}

export const initialState: EditorInitialState = {
  draggableTexts: [],
  draggableIcons: [],
}

const reducerName = 'editor'

export const editorSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    addDraggableText: (state, { payload }: PayloadAction<DraggableText>) => {
      state.draggableTexts = [...state.draggableTexts, payload]
    },
    updateDraggableText: (state, { payload }: PayloadAction<DraggableText>) => {
      state.draggableTexts = state.draggableTexts.map((text) => {
        if (text.id === payload.id) {
          return payload
        }
        return text
      })
    },
    addDraggableIcon: (state, { payload }: PayloadAction<DraggableIcon>) => {
      state.draggableIcons = [payload, ...state.draggableIcons]
    },
    updateDraggableIcon: (state, { payload }: PayloadAction<DraggableIcon>) => {
      state.draggableIcons = state.draggableIcons.map((text) => {
        if (text.id === payload.id) {
          return payload
        }
        return text
      })
    },
  },
})

export const { addDraggableText, updateDraggableText, addDraggableIcon, updateDraggableIcon } = editorSlice.actions

export const editorSelector = (state: RootState) => state.editorReducer

export const editorReducer = editorSlice.reducer
