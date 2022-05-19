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
      placeholder='Type your text...'
      onChange={(event) => {
        onChange({ ...controlledTextValues, value: event.target.value })
      }}
    />
    <InputLabel
      inputWidth='200px'
      title='Text color:'
      inputType='text'
      inputValue={controlledTextValues.color}
      placeholder='Choose your color'
      onChange={(event) => {
        onChange({ ...controlledTextValues, color: event.target.value })
      }}
    />

    <InputLabel
      inputWidth='200px'
      title='Font weight:'
      inputType='text'
      inputValue={controlledTextValues.fontWeight}
      placeholder='Choose your font weight'
      onChange={(event) => {
        onChange({ ...controlledTextValues, fontWeight: Number(event.target.value) })
      }}
    />

    <InputLabel
      inputWidth='200px'
      title='Font size:'
      onChange={(event) => {
        onChange({ ...controlledTextValues, fontSize: Number(event.target.value) })
      }}
      inputType='text'
      inputValue={controlledTextValues.fontSize}
      placeholder='Choose your font size'
    />
  </>
)
