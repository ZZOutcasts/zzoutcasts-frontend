import { Button, Group } from '@mantine/core'
import { routes } from '@config/routes'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { StepsManagementContext } from '@contexts/StepsManagementContext'
import { LoadingButton } from '@components/customInputs'

interface CreateProjectFormButtonsProps {
  isSubmitted: boolean
  nextStepIfNoErrors: () => void
  isError: boolean
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
  isError
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
                  {isError && <BackButton />}
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
