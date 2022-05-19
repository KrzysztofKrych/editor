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
    case ButtonType.DANGER:
      return {
        background: COLORS.RED,
        color: COLORS.WHITE,
      }
    default:
      return {
        background: COLORS.PRIMARY,
        color: COLORS.WHITE,
      }
  }
}

export const getSlicedArray = <T>(arr: T[], position: { start: number; end: number }): T[] =>
  arr.slice(position.start, position.end)

export const getUniqId = () => `id_${Math.random().toString(16).slice(2)}`

export const isCssProperty = (key: string, value: string) => CSS.supports(key, value)
