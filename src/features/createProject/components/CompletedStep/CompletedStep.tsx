import { Text } from '@mantine/core'

interface CompletedStepProps {
  isSuccess: boolean
}

export const CompletedStep = ({ isSuccess }: CompletedStepProps) => {
  const TEXT_SIZE = 'xl'

  if (isSuccess) {
    return (
      <Text color="green" size={TEXT_SIZE}>
        Successfully added project
      </Text>
    )
  }

  return (
    <Text color="red" size={TEXT_SIZE}>
      An error occurred while adding the project. Try again later
    </Text>
  )
}
