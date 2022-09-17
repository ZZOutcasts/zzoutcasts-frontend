import { useMutation } from '@tanstack/react-query'

export const useChangeMemberRoles = () => {
  return useMutation(({ memberId, projectId, roles }: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error()), 5000)
    })
  })
}
