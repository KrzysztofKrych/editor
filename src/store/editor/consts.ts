import { COLORS } from '../../styles/colors'
import { DraggableType } from '../../utils/enums'
import { DraggableContainer, DraggableIcon, DraggableText } from './interfaces'

export const DEFAULT_POSITION = { position: { x: 0, y: 0 } }

export const DEFAULT_CONTAINER: DraggableContainer = {
  children: {
    icons: [],
    texts: [],
  },
  height: 0,
  id: '',
  width: 0,
  ...DEFAULT_POSITION,
  type: DraggableType.CONTAINER,
}

export const DEFAULT_ICON: DraggableIcon = {
  ...DEFAULT_POSITION,
  id: '',
  fontSize: 0,
  type: DraggableType.ICON,
  value: '',
}

export const DEFAULT_TEXT: DraggableText = {
  ...DEFAULT_POSITION,
  color: COLORS.PRIMARY,
  fontSize: 14,
  fontWeight: 400,
  id: '',
  type: DraggableType.TEXT,
  value: '',
  padding: '',
  background: '',
}
