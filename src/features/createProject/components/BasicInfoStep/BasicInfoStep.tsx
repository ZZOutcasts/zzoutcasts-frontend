import { FileInput, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { CreateProjectFormValues } from '@features/createProject/types'

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
