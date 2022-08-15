import { UseFormReturnType } from '@mantine/form'
import { ApiMultiSelect } from '@features/common/components/customInputs/ApiMultiSelect'
import { CreateProjectFormValues } from '@features/createProject/types/createProject'
import { useFetchTechnologies } from '@features/createProject/hooks/useFetchTechnologies'
import { useFetchRoles } from '@features/createProject/hooks/useFetchRoles'

export const CreateProjectTechnologiesAndRolesStep = ({
  form
}: {
  form: UseFormReturnType<CreateProjectFormValues>
}) => {
  const technologiesQuery = useFetchTechnologies()
  const rolesQuery = useFetchRoles()

  return (
    <>
      <ApiMultiSelect
        label="Project technologies"
        placeholder="Type technology name to search"
        query={technologiesQuery}
        searchable
        required
        {...form.getInputProps('technologies')}
      />

      <ApiMultiSelect
        label="Project roles"
        placeholder="Type role name to search"
        query={rolesQuery}
        searchable
        required
        {...form.getInputProps('roles')}
      />
    </>
  )
}
