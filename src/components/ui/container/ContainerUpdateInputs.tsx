import { DraggableContainer } from '../../../store/editor/interfaces'
import { InputLabel } from '../elements/InputLabel'

interface Props {
  controlledContainerValues: DraggableContainer
  onChange: (text: DraggableContainer) => void
}

export const ContainerUpdateInputs = ({ controlledContainerValues, onChange }: Props) => (
  <>
    <InputLabel
      style={{ padding: '.5rem 0' }}
      inputWidth='200px'
      title='Width:'
      inputType='number'
      inputValue={controlledContainerValues.width}
      placeholder='Width of container'
      onChange={(event) => {
        onChange({ ...controlledContainerValues, width: Number(event.target.value) })
      }}
      min={0}
    />

    <InputLabel
      style={{ padding: '.5rem 0' }}
      inputWidth='200px'
      title='Height:'
      inputType='number'
      inputValue={controlledContainerValues.height}
      placeholder='Height of container'
      onChange={(event) => {
        onChange({ ...controlledContainerValues, height: Number(event.target.value) })
      }}
      min={0}
    />
  </>
)
