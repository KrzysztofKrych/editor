export interface Position {
  x: number
  y: number
}

export interface AbstractDraggable {
  id: string
  position: Position
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
