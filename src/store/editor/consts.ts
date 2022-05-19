import { DraggableContainer } from './interfaces'

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
}