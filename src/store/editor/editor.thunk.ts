import { DraggableText } from './interfaces'
import { AppThunk } from '..'
import { addDraggableText, updateDraggableText } from './editor.reducer'

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
