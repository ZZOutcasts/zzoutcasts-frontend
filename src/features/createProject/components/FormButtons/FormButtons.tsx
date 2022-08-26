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

interface BackButtonProps {
  isSubmitted?: boolean
}

const BackButton = ({ isSubmitted }: BackButtonProps) => {
  const { prevStep } = useContext(StepsManagementContext)

  return (
    <Button variant="default" onClick={prevStep} disabled={isSubmitted}>
      Back
    </Button>
  )
}

export const FormButtons = ({
  isSubmitted,
  nextStepIfNoErrors,
  error
}: CreateProjectFormButtonsProps) => {
  const router = useRouter()

  const { completedStepIndex, currentStep, lastStepIndex } = useContext(
    StepsManagementContext
  )

  return (
    <Group position="right" mt="xl">
      <>
        {(() => {
          switch (currentStep) {
            case 0:
              return <Button onClick={nextStepIfNoErrors}>Next step</Button>
            case lastStepIndex:
              return (
                <>
                  <BackButton isSubmitted={isSubmitted} />
                  <LoadingButton type="submit" isLoading={isSubmitted}>
                    Submit
                  </LoadingButton>
                </>
              )
            case completedStepIndex:
              return (
                <>
                  {error && <BackButton />}
                  <Button onClick={() => router.push(routes.myProjects())}>
                    Close
                  </Button>
                </>
              )
            default:
              return (
                <>
                  <BackButton />
                  <Button onClick={nextStepIfNoErrors}>Next step</Button>
                </>
              )
          }
        })()}
      </>
    </Group>
  )
}
