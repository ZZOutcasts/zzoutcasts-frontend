import { UseFormReturnType } from '@mantine/form'
import { ApiMultiSelect } from '@features/common/components/customInputs/ApiMultiSelect'
import { CreateProjectFormValues } from '@features/createProject/types'
import { useFetchTechnologies } from '@features/createProject/hooks/useFetchTechnologies'
import { useFetchRoles } from '@features/createProject/hooks'
import { z as zod } from 'zod'
import { mapTechnologyOrRoleToApiMultiSelectItem } from '@features/common/utils/ApiMultiSelect'

export const TechnologiesAndRolesStep = ({
  form
}: {
  form: UseFormReturnType<CreateProjectFormValues>
}) => {
  const { data: technologiesQueryData, ...technologiesQueryProps } =
    useFetchTechnologies()
  const rolesQuery = useFetchRoles()

  const technologiesQuery = {
    ...technologiesQueryProps,
    data:
      technologiesQueryData &&
      mapTechnologyOrRoleToApiMultiSelectItem(technologiesQueryData)
  }

  // TODO: add the same thing for roles

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

export const technologiesAndRolesStepValidation = () => ({
  technologies: zod
    .array(zod.unknown())
    .min(1, { message: 'Choose at least one technology' }),
  roles: zod
    .array(zod.unknown())
    .min(1, { message: 'Choose at least one role' })
})
