import { Button, Group } from '@mantine/core'
import { LoadingButton } from '@features/common/components/customInputs/LoadingButton'
import { routes } from '@config/routes'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { StepsManagementContext } from '@features/common/contexts/StepsManagementContext'

interface CreateProjectFormButtonsProps {
  isSubmitted: boolean
  nextStepIfNoErrors: () => void
  error: unknown
}

export const CreateProjectFormButtons = ({
  isSubmitted,
  nextStepIfNoErrors,
  error
}: CreateProjectFormButtonsProps) => {
  const router = useRouter()

  const { completedStepIndex, currentStep, prevStep, lastStepIndex } =
    useContext(StepsManagementContext)

  const isTheCurrentStepBetweenFirstAndCompleted = () =>
    currentStep > 0 && currentStep < completedStepIndex

  const BackButton = (
    <Button variant="default" onClick={prevStep}>
      Back
    </Button>
  )

  return (
    <Group position="right" mt="xl">
      <>
        {isTheCurrentStepBetweenFirstAndCompleted() && BackButton}
        {currentStep === completedStepIndex && error && BackButton}
        {currentStep < lastStepIndex && (
          <Button onClick={nextStepIfNoErrors}>Next step</Button>
        )}
        {currentStep === lastStepIndex && (
          <LoadingButton type="submit" isLoading={isSubmitted}>
            Submit
          </LoadingButton>
        )}
        {currentStep === completedStepIndex && (
          <Button onClick={() => router.push(routes.myProjects())}>
            Close
          </Button>
        )}
      </>
    </Group>
  )
}
