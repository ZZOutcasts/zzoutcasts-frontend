import { Group, Select } from '@mantine/core'
import { useState } from 'react'
import { LoadingButton } from '@components/customInputs/LoadingButton'
import { useFetchMembersByUsername } from '@api/hooks'

export const InvitationsTab = () => {
  const [memberUsername, setMemberUsername] = useState('')
  const { refetch, ...query } = useFetchMembersByUsername(memberUsername)

  const handleUsernameChange = async (value: string) => {
    await setMemberUsername(value)
    refetch()
  }
  return (
    <span style={{ width: '100%' }}>
      <Group
        position="center"
        sx={{ alignItems: 'flex-end', height: '40px', width: '100%' }}
      >
        <Select
          label="Choose role"
          placeholder="Pick new role"
          searchable
          nothingFound="No options"
          data={['React', 'Angular', 'Svelte', 'Vue']}
          sx={{ width: '45%' }}
        />
        <Select
          label="Choose role"
          placeholder="Pick new role"
          searchable
          nothingFound="No options"
          data={['React', 'Angular', 'Svelte', 'Vue']}
          sx={{ width: '45%' }}
        />
        <LoadingButton isLoading={false}>Submit</LoadingButton>
      </Group>
    </span>
  )
}
