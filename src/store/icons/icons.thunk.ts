import { AppThunk } from '..'
import { setIcons, setSelectedIcon } from './icons.reducer'

export const setIconsThunkAction =
  (icons: string[]): AppThunk =>
  async (dispatch) => {
    dispatch(setIcons(icons))
  }

export const setSelectedIconThunkAction =
  (icon: string): AppThunk =>
  async (dispatch) => {
    dispatch(setSelectedIcon(icon))
  }
