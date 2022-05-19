import { DraggableType, MenuType } from '../../utils/enums'

export interface Position {
  x: number
  y: number
}

export interface AbstractDraggable {
  id: string
  position: Position
  type: DraggableType
}
export interface DraggableText extends AbstractDraggable {
  value: string
}

export interface DraggableIcon extends AbstractDraggable {
  value: string
  fontSize: number
}

export interface DraggableContainer extends AbstractDraggable {
  width: number
  height: number
  children: {
    icons: DraggableIcon[]
    texts: DraggableText[]
  }
}

export interface CurrentMenu {
  value: MenuType
  type: DraggableType | null
}
