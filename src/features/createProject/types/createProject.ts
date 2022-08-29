import { ApiMultiSelectItem } from '@features/common/types/ApiMultiSelect'
import { ZodTypeAny } from 'zod'

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
