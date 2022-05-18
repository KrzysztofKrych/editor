import { DraggableText } from './interfaces'
import { AppThunk } from '..'
import { addDraggableText } from './editor.reducer'

export const setUpdatedDraggableText =
  (text: DraggableText): AppThunk =>
  async (dispatch) => {
    dispatch(addDraggableText(text))
  }
