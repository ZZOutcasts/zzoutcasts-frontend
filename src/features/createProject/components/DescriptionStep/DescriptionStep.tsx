import { UseFormReturnType } from '@mantine/form'
import { CreateProjectFormValues } from '@features/createProject/types/createProject'
import { RichTextInput } from '@features/common/components/customInputs/RichTextInput'

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
