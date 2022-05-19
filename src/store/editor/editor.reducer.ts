import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { MenuType } from '../../utils/enums'
import { DraggableContainer, DraggableIcon, DraggableText, CurrentMenu } from './interfaces'

export interface EditorInitialState {
  draggableTexts: DraggableText[]
  draggableIcons: DraggableIcon[]
  draggableContainers: DraggableContainer[]
  currentMenu: CurrentMenu
}

export const initialState: EditorInitialState = {
  draggableTexts: [],
  draggableIcons: [],
  draggableContainers: [],
  currentMenu: {
    value: MenuType.NEW,
    type: null,
    id: '',
  },
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
    deleteDraggableText: (state, { payload }: PayloadAction<string>) => {
      state.draggableTexts = state.draggableTexts.filter((text) => text.id !== payload)
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
    deleteDraggableIcon: (state, { payload }: PayloadAction<string>) => {
      state.draggableIcons = state.draggableIcons.filter((icon) => icon.id !== payload)
    },
    addDraggableContainer: (state, { payload }: PayloadAction<DraggableContainer>) => {
      state.draggableContainers = [...state.draggableContainers, payload]
    },
    updateDraggableContainer: (state, { payload }: PayloadAction<DraggableContainer>) => {
      state.draggableContainers = state.draggableContainers.map((text) => {
        if (text.id === payload.id) {
          return payload
        }
        return text
      })
    },
    deleteDraggableContainer: (state, { payload }: PayloadAction<string>) => {
      state.draggableContainers = state.draggableContainers.filter((container) => container.id !== payload)
    },
    toggleCurrentMenu: (state, { payload }: PayloadAction<CurrentMenu>) => {
      state.currentMenu = payload
    },
  },
})

export const {
  addDraggableText,
  updateDraggableText,
  deleteDraggableText,
  addDraggableIcon,
  updateDraggableIcon,
  deleteDraggableIcon,
  addDraggableContainer,
  updateDraggableContainer,
  deleteDraggableContainer,
  toggleCurrentMenu,
} = editorSlice.actions

export const editorSelector = (state: RootState) => state.editorReducer

export const editorReducer = editorSlice.reducer
