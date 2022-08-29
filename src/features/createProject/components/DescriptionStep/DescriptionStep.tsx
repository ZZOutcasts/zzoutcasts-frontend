import { UseFormReturnType } from '@mantine/form'
import { CreateProjectFormValues } from '@features/createProject/types/createProject'
import { RichTextInput } from '@features/common/components/customInputs/RichTextInput'
import { z as zod } from 'zod'

export const DescriptionStep = ({
  form
}: {
  form: UseFormReturnType<CreateProjectFormValues>
}) => {
  return (
    <RichTextInput
      placeholder="Type description"
      label="Description"
      required
      sx={{ minHeight: 400 }}
      {...form.getInputProps('description')}
      controls={[
        ['bold', 'strike', 'italic', 'underline'],
        ['h1', 'h2', 'h3', 'h4'],
        ['unorderedList', 'orderedList'],
        ['link']
      ]}
    />
  )
}

export const descriptionStepValidation = () => ({
  description: zod
    .string()
    .min(20, {
      message: 'Project description must be at least 20 characters long'
    })
    .max(100_000, {
      message:
        'Project description must be less than or equal to 100 000 characters long'
    })
})
