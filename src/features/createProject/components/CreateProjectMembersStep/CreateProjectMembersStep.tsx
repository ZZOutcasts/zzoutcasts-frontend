import { UseFormReturnType } from '@mantine/form'
import { NumberInput } from '@mantine/core'
import { CreateProjectFormValues } from '@features/createProject/types'
import { ApiMultiSelect } from '@features/common/components/customInputs/ApiMultiSelect'
import { useFetchMembersByUsername } from '@features/createProject/hooks'
import { useState } from 'react'

export const CreateProjectMembersStep = ({
  form
}: {
  form: UseFormReturnType<CreateProjectFormValues>
}) => {
  const [memberUsername, setMemberUsername] = useState('')
  const { refetch, ...query } = useFetchMembersByUsername(memberUsername)

  const handleUsernameChange = async (value: string) => {
    await setMemberUsername(value)
    refetch()
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
        {...form.getInputProps('member_ids')}
      />
    </>
  )
}
