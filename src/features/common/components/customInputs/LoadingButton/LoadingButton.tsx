import {
  Button,
  ButtonProps,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core'
import { ReactNode } from 'react'

type LoadingButtonProps = {
  children: ReactNode
  isLoading: boolean
} & ButtonProps

export const LoadingButton = ({
  children,
  isLoading = false,
  ...props
}: LoadingButtonProps) => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  return (
    <Button
      {...props}
      disabled={isLoading}
      sx={{
        ':disabled': {
          color:
            colorScheme === 'dark'
              ? theme.colors.gray[5]
              : theme.colors.dark[3],
          ...(colorScheme === 'dark'
            ? {}
            : { backgroundColor: theme.colors.gray[3] })
        }
      }}
    >
      {isLoading ? 'Loading...' : children}
    </Button>
  )
}