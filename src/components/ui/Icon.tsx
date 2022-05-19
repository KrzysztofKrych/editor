import { CSSProperties } from 'react'

interface Props {
  name: string
  style?: CSSProperties
  onClick?: () => void
}

export const Icon = ({ name, style, onClick }: Props) => (
  <span onClick={onClick} style={style} className='material-icons'>
    {name}
  </span>
)
