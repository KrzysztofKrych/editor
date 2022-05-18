import { Select } from 'antd'
import { ButtonType, DraggableType } from '../../utils/enums'
import { Button } from '../ui/Button'
import { SelectLabel } from '../ui/SelectLabel'

export const EditorMenu = () => (
  <div>
    <div>
      <SelectLabel
        title='Choose new component'
        titlePadding='1rem 0'
        defaultValue={DraggableType.ICON}
        options={Object.values(DraggableType).map((type) => (
          <Select.Option key={type} value={type}>
            {type}
          </Select.Option>
        ))}
      />
      <Button style={{ margin: '1rem 0' }} type={ButtonType.PRIMARY} text='Add' />
    </div>
  </div>
)
