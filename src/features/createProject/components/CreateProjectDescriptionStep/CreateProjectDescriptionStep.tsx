import { UseFormReturnType } from '@mantine/form'
import { CreateProjectFormValues } from '@features/createProject/types/createProject'
import { CreateProjectFormRichText } from '../CreateProjectFormRichText'

export const CreateProjectDescriptionStep = ({
  form
}: {
  form: UseFormReturnType<CreateProjectFormValues>
}) => {
  return (
    <CreateProjectFormRichText
      placeholder="Type description"
      label="Description"
      required
      sx={{ minHeight: 400 }}
      {...form.getInputProps('description')}
    />
  )
}
