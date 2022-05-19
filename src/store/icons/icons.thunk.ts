import { AppThunk } from '..'
import { setIcons } from './icons.reducer'

export const setIconsThunkAction =
  (icons: string[]): AppThunk =>
  async (dispatch) => {
    dispatch(setIcons(icons))
  }
