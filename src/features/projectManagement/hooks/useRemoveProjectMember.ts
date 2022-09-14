import { useMutation } from '@tanstack/react-query'

export const useRemoveProjectMember = () => {
  return useMutation(({ projectId, memberId }: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ success: true }), 5000)
    })
  })
}
