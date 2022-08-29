import { useMutation } from '@tanstack/react-query'
import { CreateProjectFormValues } from '@features/createProject/types'

export const useCreateProject = () => {
  return useMutation((data: CreateProjectFormValues) => {
    console.log(data)
    return new Promise<{ success: boolean }>((resolve, reject) => {
      setTimeout(() => reject(new Error('Some error')), 3000)
    })
  })
}
