import { DraggableText } from './interfaces'
import { AppThunk } from '..'
import { addDraggableText } from './editor.reducer'

export const addDraggableTextThunkAction =
  (text: DraggableText): AppThunk =>
  async (dispatch) => {
    dispatch(addDraggableText(text))
  }
