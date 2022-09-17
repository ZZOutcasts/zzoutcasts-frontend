import { useQuery } from '@tanstack/react-query'

export const useUserProject = (projectId: string) => {
  return useQuery<any>(['project', projectId], async () => {
    return new Promise<any>((resolve, reject) => {
      console.log(projectId)
      setTimeout(() => resolve({ id: 'someuuid' }), 1000)
    })
  })
}
