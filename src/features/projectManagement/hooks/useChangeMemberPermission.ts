import { useMutation } from '@tanstack/react-query'

export const useChangeMemberPermission = () => {
  return useMutation(({ memberId, projectId, permission }: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error()), 5000)
    })
  })
}
