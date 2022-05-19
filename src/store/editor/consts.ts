import { DraggableType } from '../../utils/enums'
import { DraggableContainer, DraggableIcon } from './interfaces'

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
