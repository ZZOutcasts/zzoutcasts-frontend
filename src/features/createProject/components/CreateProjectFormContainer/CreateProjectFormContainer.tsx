import Joi from 'joi'
import { useContext, useState } from 'react'
import { Stepper } from '@mantine/core'
import { joiResolver, useForm } from '@mantine/form'
import { CreateProjectDescriptionStep } from '@features/createProject/components/CreateProjectDescriptionStep'
import { CreateProjectTechnologiesAndRolesStep } from '@features/createProject/components/CreateProjectTechnologiesAndRolesStep'
import { CreateProjectMembersStep } from '@features/createProject/components/CreateProjectMembersStep'
import { CreateProjectBasicInfoStep } from '@features/createProject/components/CreateProjectBasicInfoStep'
import {
  CreateProjectFormValues,
  CreateProjectFormValuesValidation,
  Step
} from '@features/createProject/types/createProject'
import { CompletedStep } from '@features/createProject/components/CompletedStep'
import { useCreateProject } from '@features/createProject/hooks/useCreateProject'
import { withStepsManagement } from '@features/common/hoc/withStepsManagement'
import { CreateProjectFormButtons } from '@features/createProject/components/CreateProjectFormButtons'
import { StepsManagementContext } from '@features/common/contexts/StepsManagementContext'
import { ApiMultiSelectItem } from '@features/common/types/ApiMultiSelect'
import { ObjectEntries } from '@features/common/types/types'
import { useWindowSize } from '@features/common/hooks/useWIndowSize'

const stepElementsArray: Step[] = [
  {
    description: 'Basic information',
    node: CreateProjectBasicInfoStep,
    joiValidation: {
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
    }
  },
  {
    description: 'Description',
    node: CreateProjectDescriptionStep,
    joiValidation: {
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
    }
  },
  {
    description: 'Technologies and roles',
    node: CreateProjectTechnologiesAndRolesStep,
    joiValidation: {
      technologies: Joi.array()
        .min(1)
        .message('Choose at least one technology'),
      roles: Joi.array().min(1).message('Choose at least one role')
    }
  },
  {
    description: 'Members',
    node: CreateProjectMembersStep,
    joiValidation: {
      capacity: Joi.number()
        .min(1)
        .message('Project capacity must be greater than or equal to 1')
        .max(100)
        .message('Project capacity must be less than or equal to 100')
    },
    validation: {
      member_ids: (
        value: ApiMultiSelectItem[],
        values: CreateProjectFormValues
      ) => {
        if (value.length > values.capacity)
          return 'You cannot add more members than the capacity of the project'
        return null
      }
    }
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
  const SWITCH_TO_HORIZONTAL_WINDOW_WIDTH = 1000

  const [isSubmitted, setIsSubmitted] = useState(false)

  const { error, refetch: reFetch } = useCreateProject(
    formData as CreateProjectFormValues
  )

  const form = useForm<CreateProjectFormValues>({
    validate: (values: CreateProjectFormValues) => {
      if (currentStep >= completedStepIndex) return {}

      const currentStepObj = stepElementsArray[currentStep]

      const schema = Joi.object<CreateProjectFormValues>(
        currentStepObj.joiValidation || {}
      )

      const validationResult = (
        Object.entries(currentStepObj.validation || {}) as ObjectEntries<
          Required<CreateProjectFormValuesValidation>
        >
      ).reduce((acc, [key, validationFunction]) => {
        return { ...acc, ...{ [key]: validationFunction(values[key], values) } }
      }, {})

      return {
        ...joiResolver(schema.options({ allowUnknown: true }))(values),
        ...validationResult
      }
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
          windowWidth > SWITCH_TO_HORIZONTAL_WINDOW_WIDTH
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

      <CreateProjectFormButtons
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
