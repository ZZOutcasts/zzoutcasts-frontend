import { createStyles } from '@mantine/core'
import { cloneElement, ReactElement } from 'react'

interface FixInputAutoCompletionStylesProps {
  children: ReactElement
}

export const FixInputAutoCompletionStyles = ({
  children
}: FixInputAutoCompletionStylesProps) => {
  const { classes } = createStyles((theme) => ({
    repairedAutoCompletion: {
      '.mantine-Input-wrapper > input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active, input:-internal-autofill-selected':
        {
          '-webkit-text-fill-color':
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          '-webkit-box-shadow': `0px 0px 0px 10000px ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white
          } inset`,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          caretColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          '-webkit-background-clip': 'text'
        }
    }
  }))()

  return cloneElement(children, {
    className: classes.repairedAutoCompletion
  })
}
