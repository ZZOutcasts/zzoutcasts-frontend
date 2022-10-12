import { forwardRef } from 'react'
import { Box, SelectItemProps } from '@mantine/core'
import Image from 'next/image'
import { ApiMultiSelectItem } from '@types/ApiMultiSelect'
import { useStyles } from '@components/customInputs/ApiMultiSelect/ApiMultiSelectItemComponent.styles'

type ApiMultiSelectItemProps = SelectItemProps &
  ApiMultiSelectItem & { center: boolean }

export const ApiMultiSelectItemComponent = forwardRef<
  HTMLDivElement,
  ApiMultiSelectItemProps
>(({ imageUrl, label, center, ...others }, ref) => {
  const { classes } = useStyles()

  return (
    <div ref={ref} {...others}>
      <Box
        className={classes.innerContainer}
        sx={{
          ...(center ? { justifyContent: 'center' } : {})
        }}
      >
        <Box mr={10} className={classes.imageContainer}>
          {imageUrl && <Image src={imageUrl} width={20} height={20} />}
        </Box>
        <div>{label}</div>
      </Box>
    </div>
  )
})
