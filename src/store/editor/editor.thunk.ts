import { DraggableIcon, DraggableText } from './interfaces'
import { AppThunk } from '..'
import { addDraggableIcon, addDraggableText, updateDraggableIcon, updateDraggableText } from './editor.reducer'

export const addDraggableTextThunkAction =
  (text: DraggableText): AppThunk =>
  async (dispatch) => {
    dispatch(addDraggableText(text))
  }

export const updateDraggableTextThunkAction =
  (text: DraggableText): AppThunk =>
  async (dispatch) => {
    dispatch(updateDraggableText(text))
  }

export const addDraggableIconThunkAction =
  (icon: DraggableIcon): AppThunk =>
  async (dispatch) => {
    dispatch(addDraggableIcon(icon))
  }

export const updateDraggableIconThunkAction =
  (icon: DraggableIcon): AppThunk =>
  async (dispatch) => {
    dispatch(updateDraggableIcon(icon))
  }
