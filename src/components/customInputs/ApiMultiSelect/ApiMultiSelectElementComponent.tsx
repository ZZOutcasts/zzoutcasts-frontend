import { Box, CloseButton, MultiSelectValueProps } from '@mantine/core'
import Image from 'next/image'
import { ApiMultiSelectItem } from '@types/ApiMultiSelect'
import { useStyles } from './ApiMultiSelectElementComponent.styles'

type ApiMultiSelectElementComponentProps = MultiSelectValueProps &
  ApiMultiSelectItem

export const ApiMultiSelectElementComponent = ({
  label,
  imageUrl,
  onRemove,
  ...others
}: ApiMultiSelectElementComponentProps) => {
  const { classes } = useStyles()

  return (
    <div {...others}>
      <Box className={classes.innerContainer}>
        <Box mr={10}>
          {imageUrl && (
            <Image src={imageUrl} layout="fixed" width={10} height={10} />
          )}
        </Box>
        <Box className={classes.textContainer}>{label}</Box>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  )
}
