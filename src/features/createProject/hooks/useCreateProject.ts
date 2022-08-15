import { useQuery } from '@tanstack/react-query'
import { CreateProjectFormValues } from '@features/createProject/types/createProject'

export const useCreateProject = (data: CreateProjectFormValues | undefined) => {
  return useQuery<any>(
    ['createProject', data],
    () => {
      console.log(data)
      return new Promise<{ success: boolean }>((resolve, reject) => {
        setTimeout(() => reject(new Error('Some error')), 1000)
      })
    },
    {
      enabled: false,
      refetchOnWindowFocus: false
    }
  )
}
