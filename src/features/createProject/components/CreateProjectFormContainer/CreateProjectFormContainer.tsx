import Joi from 'joi'
import { useContext, useState } from 'react'
import { Stepper } from '@mantine/core'
import { joiResolver, useForm } from '@mantine/form'
import { DescriptionStep } from '@features/createProject/components/DescriptionStep'
import { TechnologiesAndRolesStep } from '@features/createProject/components/TechnologiesAndRolesStep'
import { MembersStep } from '@features/createProject/components/MembersStep'
import { BasicInfoStep } from '@features/createProject/components/BasicInfoStep'
import { CreateProjectFormValues, Step } from '@features/createProject/types'
import { CompletedStep } from '@features/createProject/components/CompletedStep'
import { useCreateProject } from '@features/createProject/hooks'
import { withStepsManagement } from '@features/common/hocs/withStepsManagement'
import { FormButtons } from '@features/createProject/components/FormButtons'
import { StepsManagementContext } from '@features/common/contexts/StepsManagementContext'
import { useWindowSize } from '@features/common/hooks/useWIndowSize'

const stepElementsArray: Step[] = [
  {
    description: 'Basic information',
    node: BasicInfoStep,
    validate: () => ({
      name: Joi.string()
        .min(5)
        .message('Project name must be at least 5 characters long')
        .max(100)
        .message(
          'Project name must be less than or equal to 100 characters long'
        )
        .messages({
          'string.empty': 'Project name is required'
        }),
      avatar: Joi.any().required().messages({
        'any.required': 'Project avatar is required'
      })
    })
  },
  {
    description: 'Description',
    node: DescriptionStep,
    validate: () => ({
      description: Joi.string()
        .min(20)
        .message('Project description must be at least 20 characters long')
        .max(100_000)
        .message(
          'Project description must be less than or equal to 100 000 characters long'
        )
        .messages({
          'string.empty': 'Project description is required'
        })
    })
  },
  {
    description: 'Technologies and roles',
    node: TechnologiesAndRolesStep,
    validate: () => ({
      technologies: Joi.array()
        .min(1)
        .message('Choose at least one technology'),
      roles: Joi.array().min(1).message('Choose at least one role')
    })
  },
  {
    description: 'Members',
    node: MembersStep,
    validate: (values: CreateProjectFormValues) => ({
      capacity: Joi.number()
        .min(1)
        .message('Project capacity must be greater than or equal to 1')
        .max(100)
        .message('Project capacity must be less than or equal to 100'),
      member_ids: Joi.array()
        .max(values.capacity > 0 ? values.capacity : 0)
        .message('You cannot add more members than the capacity of the project')
    })
  }
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

      const currentStepObj = stepElementsArray[currentStep]

      const schema = Joi.object(currentStepObj.validate(values))

      return joiResolver(schema.options({ allowUnknown: true }))(values)
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
        {stepElementsArray.map((element, index) => (
          <Stepper.Step
            label={`Step ${index + 1}`}
            description={element.description}
            key={element.description}
          >
            <element.node form={form} />
          </Stepper.Step>
        ))}
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
  stepElementsArray.length
)
