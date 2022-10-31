import { UseFormReturnType } from '@mantine/form'
import { NumberInput } from '@mantine/core'
import { CreateProjectFormValues } from '@features/createProject/types'
import { useState } from 'react'
import { z as zod } from 'zod'
import { useFetchMembersByUsername } from '@api/hooks'
import { ApiMultiSelect } from '@components/customInputs'
import { mapProjectMemberToApiMultiSelect } from '@utils'

export const MembersStep = ({
  form
}: {
  form: UseFormReturnType<CreateProjectFormValues>
}) => {
  const [memberUsername, setMemberUsername] = useState('')
  const { refetch, data, ...queryProps } =
    useFetchMembersByUsername(memberUsername)

  const handleUsernameChange = async (value: string) => {
    await setMemberUsername(value)
    refetch()
  }

  const query = {
    data: data && mapProjectMemberToApiMultiSelect(data),
    ...queryProps
  }

  return (
    <>
      <NumberInput
        placeholder="Type project capacity"
        label="Project capacity"
        required
        {...form.getInputProps('capacity')}
      />

      <ApiMultiSelect
        onSearchChange={handleUsernameChange}
        query={query}
        label="Add members to project"
        placeholder="Type member's username"
        searchable
        shouldReFetchOnSearchChange
        noDataMessage="No such user found"
        required
        {...form.getInputProps('members')}
      />
    </>
  )
}

export const membersStepValidation = (values: CreateProjectFormValues) => ({
  capacity: zod
    .number()
    .min(1, {
      message: 'Project capacity must be greater than or equal to 1'
    })
    .max(100, {
      message: 'Project capacity must be less than or equal to 100'
    }),
  members: zod
    .array(zod.unknown())
    .max(values.capacity > 0 ? values.capacity : 0, {
      message: 'You cannot add more members than the capacity of the project'
    })
})
