import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { MenuType } from '../../utils/enums'
import { DEFAULT_CONTAINER, DEFAULT_TEXT } from './consts'
import { DraggableContainer, DraggableIcon, DraggableText, CurrentMenu } from './interfaces'

export interface EditorInitialState {
  draggableTexts: DraggableText[]
  draggableIcons: DraggableIcon[]
  draggableContainers: DraggableContainer[]
  selectedText: DraggableText
  newContainer: DraggableContainer
  currentMenu: CurrentMenu
}

export const initialState: EditorInitialState = {
  draggableTexts: [],
  draggableIcons: [],
  draggableContainers: [],
  selectedText: DEFAULT_TEXT,
  newContainer: DEFAULT_CONTAINER,
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
      state.selectedText = DEFAULT_TEXT
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
    updateSelectedText: (state, { payload }: PayloadAction<DraggableText>) => {
      state.selectedText = payload
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
    updateNewDraggableContainer: (state, { payload }: PayloadAction<DraggableContainer>) => {
      state.newContainer = payload
    },
    toggleCurrentMenu: (state, { payload }: PayloadAction<CurrentMenu>) => {
      state.currentMenu = payload
    },
  },
})

export const {
  addDraggableText,
  updateDraggableText,
  addDraggableIcon,
  updateDraggableIcon,
  updateSelectedText,
  addDraggableContainer,
  updateDraggableContainer,
  updateNewDraggableContainer,
  toggleCurrentMenu,
} = editorSlice.actions

export const editorSelector = (state: RootState) => state.editorReducer

export const editorReducer = editorSlice.reducer
