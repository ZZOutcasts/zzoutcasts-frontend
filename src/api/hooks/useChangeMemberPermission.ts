import { useMutation } from '@tanstack/react-query'

interface UseChangeMemberPermissionProps {
  memberId: string
  projectId: string
  permissionName: string
}

export const useChangeMemberPermission = () => {
  return useMutation(
    ({
      memberId,
      projectId,
      permissionName
    }: UseChangeMemberPermissionProps) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error()), 5000)
      })
    }
  )
}
