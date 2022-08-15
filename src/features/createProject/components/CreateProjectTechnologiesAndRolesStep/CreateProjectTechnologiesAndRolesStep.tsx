import { UseFormReturnType } from '@mantine/form'
import { ApiMultiSelect } from '@features/common/components/customInputs/ApiMultiSelect'
import { CreateProjectFormValues } from '@features/createProject/types'
import { useFetchTechnologies } from '@features/createProject/hooks/useFetchTechnologies'
import { useFetchRoles } from '@features/createProject/hooks'

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
        noDataMessage="Technology with given name not found"
        required
        {...form.getInputProps('technologies')}
      />

      <ApiMultiSelect
        label="Project roles"
        placeholder="Type role name to search"
        query={rolesQuery}
        searchable
        noDataMessage="Role with given name not found"
        required
        {...form.getInputProps('roles')}
      />
    </>
  )
}