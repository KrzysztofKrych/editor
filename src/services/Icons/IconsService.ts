import axios from 'axios'
import { AppDispatch } from '../../store'
import { setIconsThunkAction } from '../../store/icons/icons.thunk'
import { ICONS_API_URL } from './consts'

export class IconService {
  public static async getIcons(dispatch: AppDispatch) {
    const { data } = await axios.get<string>(ICONS_API_URL)
    const iconsNames = data.split('\n').map((line) => line.split(' ')[0])
    dispatch(setIconsThunkAction(iconsNames))
  }
}
