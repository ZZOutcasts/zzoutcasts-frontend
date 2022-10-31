import { Group } from '@mantine/core'
import { LoadingButton, LoadingButtonProps } from '@components/customInputs'

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
