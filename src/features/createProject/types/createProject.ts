import { ApiMultiSelectItem } from '@features/common/types/ApiMultiSelect'
import { UseFormReturnType } from '@mantine/form'
import { ZodTypeAny } from 'zod'

export interface CreateProjectFormValues {
  name: string
  avatar?: File
  description: string
  technologies: ApiMultiSelectItem[]
  roles: ApiMultiSelectItem[]
  member_ids: ApiMultiSelectItem[]
  capacity: number
}

export type CreateProjectFormValuesValidation = {
  [key in keyof CreateProjectFormValues]?: ZodTypeAny
}

export interface Step {
  description: string
  node: ({
    form
  }: {
    form: UseFormReturnType<CreateProjectFormValues>
  }) => JSX.Element
  validate: (
    values: CreateProjectFormValues
  ) => CreateProjectFormValuesValidation
}
