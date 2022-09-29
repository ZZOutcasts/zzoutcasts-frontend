import { useMutation } from '@tanstack/react-query'

interface UseRemoveProjectMemberProps {
  projectId: string
  memberId: string
}

export const useRemoveProjectMember = () => {
  return useMutation(({ projectId, memberId }: UseRemoveProjectMemberProps) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ success: true }), 5000)
    })
  })
}
