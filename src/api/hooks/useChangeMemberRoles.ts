import { useMutation } from '@tanstack/react-query'

interface UseChangeMemberRolesProps {
  memberId: string
  projectId: string
  roleNames: string[]
}

export const useChangeMemberRoles = () => {
  return useMutation(
    ({ memberId, projectId, roleNames }: UseChangeMemberRolesProps) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error()), 5000)
      })
    }
  )
}
