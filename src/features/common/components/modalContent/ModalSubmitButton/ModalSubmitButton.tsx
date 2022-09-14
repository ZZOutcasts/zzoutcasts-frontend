import {
  LoadingButton,
  LoadingButtonProps
} from '@features/common/components/customInputs/LoadingButton'
import { Group } from '@mantine/core'

export const ModalSubmitButton = ({
  children,
  ...props
}: LoadingButtonProps) => {
  return (
    <Group position="right">
      <LoadingButton {...props}>{children}</LoadingButton>
    </Group>
  )
}
