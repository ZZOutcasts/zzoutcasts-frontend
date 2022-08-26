import { FileInput, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { CreateProjectFormValues } from '@features/createProject/types'
import { z as zod } from 'zod'
import { ALLOWED_AVATAR_EXTENSIONS } from '@features/createProject/constants'

export const BasicInfoStep = ({
  form
}: {
  form: UseFormReturnType<CreateProjectFormValues>
}) => {
  return (
    <>
      <TextInput
        placeholder="Type project name"
        label="Project name"
        required
        {...form.getInputProps('name')}
      />
      <FileInput
        required
        placeholder="Click to select a photo from your computer"
        label="Project avatar"
        {...form.getInputProps('avatar')}
      />
    </>
  )
}

export const BasicInfoStepData = {
  description: 'Basic information',
  validate: () => ({
    name: zod
      .string()
      .min(5, { message: 'Project name must be at least 5 characters long' })
      .max(100, {
        message:
          'Project name must be less than or equal to 100 characters long'
      }),
    avatar: zod
      .any()

      .refine(
        (file) => file && ALLOWED_AVATAR_EXTENSIONS.includes(file.type),
        'The avatar file should have an extension of .png, .jpg, .jpeg or .webp'
      )
      .refine((file) => !!file, 'Project avatar is required')
  })
}
