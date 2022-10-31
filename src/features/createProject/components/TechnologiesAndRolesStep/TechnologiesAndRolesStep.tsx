import { UseFormReturnType } from '@mantine/form'
import { CreateProjectFormValues } from '@features/createProject/types'
import { useFetchTechnologies } from '@api/hooks/useFetchTechnologies'
import { z as zod } from 'zod'
import { useFetchRoles } from '@api/hooks'
import { mapTechnologyOrRoleToApiMultiSelectItem } from '@utils'
import { ApiMultiSelect } from '@components/customInputs'

export const TechnologiesAndRolesStep = ({
  form
}: {
  form: UseFormReturnType<CreateProjectFormValues>
}) => {
  const { data: technologiesQueryData, ...technologiesQueryProps } =
    useFetchTechnologies()
  const { data: rolesQueryData, ...rolesQueryProps } = useFetchRoles()

  const technologiesQuery = {
    ...technologiesQueryProps,
    data:
      technologiesQueryData &&
      mapTechnologyOrRoleToApiMultiSelectItem(technologiesQueryData)
  }

  const rolesQuery = {
    ...rolesQueryProps,
    data:
      rolesQueryData && mapTechnologyOrRoleToApiMultiSelectItem(rolesQueryData)
  }

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
