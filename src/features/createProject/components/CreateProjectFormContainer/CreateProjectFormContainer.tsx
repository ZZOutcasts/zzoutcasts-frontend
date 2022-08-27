import { z as zod } from 'zod'
import { useContext, useState } from 'react'
import { Stepper } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import {
  DescriptionStep,
  descriptionStepValidation
} from '@features/createProject/components/DescriptionStep'
import {
  TechnologiesAndRolesStep,
  technologiesAndRolesStepValidation
} from '@features/createProject/components/TechnologiesAndRolesStep'
import {
  MembersStep,
  membersStepValidation
} from '@features/createProject/components/MembersStep'
import {
  BasicInfoStep,
  basicInfoStepValidation
} from '@features/createProject/components/BasicInfoStep'
import {
  CreateProjectFormValues,
  StepValidation
} from '@features/createProject/types'
import { CompletedStep } from '@features/createProject/components/CompletedStep'
import { useCreateProject } from '@features/createProject/hooks'
import { withStepsManagement } from '@features/common/hocs/withStepsManagement'
import { FormButtons } from '@features/createProject/components/FormButtons'
import { StepsManagementContext } from '@features/common/contexts/StepsManagementContext'
import { useWindowSize } from '@features/common/hooks/useWIndowSize'

const stepsValidationArray: StepValidation[] = [
  basicInfoStepValidation,
  descriptionStepValidation,
  technologiesAndRolesStepValidation,
  membersStepValidation
]

const CreateProjectForm = () => {
  const { nextStep, currentStep, completedStepIndex } = useContext(
    StepsManagementContext
  )

  const [formData, setFormData] = useState<CreateProjectFormValues | undefined>(
    undefined
  )

  const [windowWidth] = useWindowSize()
  const SWITCH_TO_MOBILE_VIEW_WINDOW_WIDTH = 1000

  const [isSubmitted, setIsSubmitted] = useState(false)

  const { error, refetch: reFetch } = useCreateProject(
    formData as CreateProjectFormValues
  )

  const form = useForm<CreateProjectFormValues>({
    validate: (values: CreateProjectFormValues) => {
      if (currentStep >= completedStepIndex) return {}

      const getValidation = stepsValidationArray[currentStep]

      const schema = zod.object(getValidation(values))

      return zodResolver(schema)(values)
    },
    initialValues: {
      name: '',
      avatar: undefined,
      description: '',
      technologies: [],
      roles: [],
      member_ids: [],
      capacity: 0
    }
  })

  const nextStepIfNoErrors = () => !form.validate().hasErrors && nextStep()

  const handleSubmit = async (values: CreateProjectFormValues) => {
    await setFormData(values)
    await setIsSubmitted(true)
    await reFetch()
    await nextStepIfNoErrors()
    setIsSubmitted(false)
  }

  return (
    <form
      onSubmit={form.onSubmit(handleSubmit)}
      style={{ maxWidth: 900, margin: 'auto' }}
    >
      <Stepper
        active={currentStep}
        orientation={
          windowWidth > SWITCH_TO_MOBILE_VIEW_WINDOW_WIDTH
            ? 'horizontal'
            : 'vertical'
        }
      >
        <Stepper.Step
          label="Step 1"
          description="Basic information"
          key="Basic information"
        >
          <BasicInfoStep form={form} />
        </Stepper.Step>

        <Stepper.Step
          label="Step 2"
          description="Description"
          key="Description"
        >
          <DescriptionStep form={form} />
        </Stepper.Step>

        <Stepper.Step
          label="Step 3"
          description="Technologies and roles"
          key="Technologies and roles"
        >
          <TechnologiesAndRolesStep form={form} />
        </Stepper.Step>

        <Stepper.Step label="Step 4" description="Members" key="Members">
          <MembersStep form={form} />
        </Stepper.Step>

        <Stepper.Completed>
          <CompletedStep isSuccess={!error} />
        </Stepper.Completed>
      </Stepper>

      <FormButtons
        isSubmitted={isSubmitted}
        nextStepIfNoErrors={nextStepIfNoErrors}
        error={error}
      />
    </form>
  )
}

export const CreateProjectFormContainer = withStepsManagement(
  CreateProjectForm,
  4
)
