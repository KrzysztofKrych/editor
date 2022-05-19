import { DraggableText } from '../../store/editor/interfaces'
import { InputLabel } from './InputLabel'

interface Props {
  controlledTextValues: DraggableText
  onChange: (text: DraggableText) => void
}

export const TextUpdateInputs = ({ controlledTextValues, onChange }: Props) => (
  <>
    <InputLabel
      inputWidth='200px'
      title='Text:'
      inputType='text'
      inputValue={controlledTextValues.value}
      placeholder='Type text...'
      onChange={(event) => {
        onChange({ ...controlledTextValues, value: event.target.value })
      }}
    />
    <InputLabel
      inputWidth='200px'
      title='Text color:'
      inputType='text'
      inputValue={controlledTextValues.color}
      placeholder='Choose color'
      onChange={(event) => {
        onChange({ ...controlledTextValues, color: event.target.value })
      }}
    />

    <InputLabel
      inputWidth='200px'
      title='Font weight:'
      inputType='text'
      inputValue={controlledTextValues.fontWeight}
      placeholder='Choose font weight'
      onChange={(event) => {
        onChange({ ...controlledTextValues, fontWeight: Number(event.target.value) })
      }}
    />

    <InputLabel
      inputWidth='200px'
      title='Background:'
      onChange={(event) => {
        onChange({ ...controlledTextValues, background: event.target.value })
      }}
      inputType='text'
      inputValue={controlledTextValues.background}
      placeholder='Choose background color'
    />
    <InputLabel
      inputWidth='200px'
      title='Padding:'
      onChange={(event) => {
        onChange({ ...controlledTextValues, padding: event.target.value })
      }}
      inputType='text'
      inputValue={controlledTextValues.padding}
      placeholder='Choose padding'
    />
  </>
)
