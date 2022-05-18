import { COLORS } from '../styles/colors'
import { ButtonType } from './enums'

export const getButtonProps = (type: ButtonType) => {
  switch (type) {
    case ButtonType.PRIMARY:
      return {
        background: COLORS.PRIMARY,
        color: COLORS.WHITE,
      }
    case ButtonType.SECONDARY:
      return {
        background: COLORS.PRIMARY,
        color: COLORS.WHITE,
      }
    default:
      return {
        background: COLORS.PRIMARY,
        color: COLORS.WHITE,
      }
  }
}
