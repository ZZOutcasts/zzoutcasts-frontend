import { ApiMultiSelectItem } from '@features/common/types/ApiMultiSelect'
import { UseFormReturnType } from '@mantine/form'

export interface CreateProjectFormValues {
  name: string
  avatar: File | undefined
  description: string
  technologies: ApiMultiSelectItem[]
  roles: ApiMultiSelectItem[]
  member_ids: ApiMultiSelectItem[]
  capacity: number
}

export type CreateProjectFormValuesValidation = {
  [key in keyof CreateProjectFormValues]?: (
    value: any,
    values: CreateProjectFormValues
  ) => string | null
}

export interface Step {
  description: string
  node: ({
    form
  }: {
    form: UseFormReturnType<CreateProjectFormValues>
  }) => JSX.Element
  validation?: CreateProjectFormValuesValidation
  joiValidation?: any
}
