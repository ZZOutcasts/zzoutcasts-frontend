import { useMutation } from '@tanstack/react-query'
import { CreateAndUpdateProject } from '@api/types'

interface UseCreateProjectProps {
  project: CreateAndUpdateProject
}

export const useCreateProject = () => {
  return useMutation(({ project }: UseCreateProjectProps) => {
    console.log(project)
    return new Promise<{ success: boolean }>((resolve, reject) => {
      setTimeout(() => reject(new Error('Some error')), 3000)
    })
  })
}
