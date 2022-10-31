import { ZodTypeAny } from 'zod'
import { ApiMultiSelectItem } from '@types'

export interface CreateProjectFormValues {
  name: string
  avatar?: File
  description: string
  technologies: ApiMultiSelectItem[]
  roles: ApiMultiSelectItem[]
  members: ApiMultiSelectItem[]
  capacity: number
}

export type CreateProjectFormValuesValidation = {
  [key in keyof CreateProjectFormValues]?: ZodTypeAny
}

export type StepValidation = (
  values: CreateProjectFormValues
) => CreateProjectFormValuesValidation

// TODO: types into specific files
