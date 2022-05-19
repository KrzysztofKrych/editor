import { AppThunk } from '..'
import { setIcons, setSelectedIcon } from './icons.reducer'
import { Icon } from './interfaces'

export const setIconsThunkAction =
  (icons: string[]): AppThunk =>
  async (dispatch) => {
    dispatch(setIcons(icons))
  }

export const setSelectedIconThunkAction =
  (icon: Icon): AppThunk =>
  async (dispatch) => {
    dispatch(setSelectedIcon(icon))
  }
